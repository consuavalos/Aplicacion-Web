-- =========================================================
-- ENIGMA — Esquema de base de datos para Supabase
-- Ejecuta esto en: Supabase Dashboard -> SQL Editor -> New query
-- =========================================================

-- 1. PERFILES (extiende la tabla auth.users de Supabase)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  nombre text not null default 'Jugador ENIGMA',
  nivel int not null default 1,
  xp int not null default 0,
  xp_siguiente_nivel int not null default 500,
  racha int not null default 0,
  logros int not null default 0,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Los usuarios ven su propio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Los usuarios actualizan su propio perfil"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Los usuarios insertan su propio perfil"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 2. Crear perfil automáticamente cuando alguien se registra
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, nombre)
  values (new.id, coalesce(new.raw_user_meta_data->>'nombre', 'Jugador ENIGMA'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 3. HABILIDADES (catálogo fijo de habilidades entrenables)
create table public.habilidades (
  id serial primary key,
  clave text unique not null,        -- ej: 'logica', 'patrones', 'memoria'
  nombre text not null,               -- ej: 'Lógica y Razonamiento'
  icono text,                         -- nombre de ícono (lucide-react) opcional
  color text                          -- color hex para la barra
);

insert into public.habilidades (clave, nombre, icono, color) values
  ('logica', 'Lógica y Razonamiento', 'brain', '#8b5cf6'),
  ('patrones', 'Patrones y Secuencias', 'git-branch', '#3b82f6'),
  ('memoria', 'Memoria', 'target', '#22c55e'),
  ('deduccion', 'Deducción', 'search', '#f97316'),
  ('estrategia', 'Estrategia y Decisiones', 'chess', '#ef4444'),
  ('matematico', 'Pensamiento Matemático', 'sigma', '#10b981'),
  ('computacional', 'Pensamiento Computacional', 'code', '#06b6d4');

-- 4. PROGRESO DEL USUARIO POR HABILIDAD
create table public.progreso_habilidad (
  usuario_id uuid references auth.users on delete cascade,
  habilidad_id int references public.habilidades on delete cascade,
  nivel int not null default 1,
  porcentaje int not null default 0,
  primary key (usuario_id, habilidad_id)
);

alter table public.progreso_habilidad enable row level security;

create policy "Los usuarios ven su propio progreso"
  on public.progreso_habilidad for select
  using (auth.uid() = usuario_id);

create policy "Los usuarios actualizan su propio progreso"
  on public.progreso_habilidad for all
  using (auth.uid() = usuario_id);

-- 5. DESAFÍOS (banco de preguntas)
create table public.desafios (
  id serial primary key,
  habilidad_id int references public.habilidades,
  nivel int not null default 1,
  enunciado text not null,
  opciones jsonb not null,        -- ej: [{"id":"A","texto":"20"},{"id":"B","texto":"30"}...]
  respuesta_correcta text not null,
  explicacion text,
  estrategia_titulo text,
  estrategia_texto text,
  xp_otorgado int not null default 20
);

-- Ejemplo de desafío (como el de tu mockup "2, 4, 8, 16, ?")
insert into public.desafios (habilidad_id, nivel, enunciado, opciones, respuesta_correcta, explicacion, estrategia_titulo, estrategia_texto, xp_otorgado)
values (
  (select id from public.habilidades where clave = 'patrones'),
  1,
  'Observa la secuencia y elige el siguiente número: 2, 4, 8, 16, ?',
  '[{"id":"A","texto":"20"},{"id":"B","texto":"30"},{"id":"C","texto":"32"},{"id":"D","texto":"40"}]',
  'C',
  'La secuencia sigue el patrón de multiplicar por 2 cada término.',
  'Patrones Numéricos',
  'Identificar y continuar secuencias lógicas.',
  20
);

-- 6. PROGRESO POR DESAFÍO (para no repetir y calcular % de éxito)
create table public.progreso_desafio (
  id bigserial primary key,
  usuario_id uuid references auth.users on delete cascade,
  desafio_id int references public.desafios,
  correcto boolean not null,
  respondido_at timestamptz default now()
);

alter table public.progreso_desafio enable row level security;

create policy "Los usuarios ven su propio historial"
  on public.progreso_desafio for select
  using (auth.uid() = usuario_id);

create policy "Los usuarios insertan su propio historial"
  on public.progreso_desafio for insert
  with check (auth.uid() = usuario_id);
