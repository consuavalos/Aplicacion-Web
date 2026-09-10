const HABILIDADES = [
  {id:1, clave:'logica', icono:'🧠', nombre:'Lógica y Razonamiento', color:'#c77dff'},
  {id:2, clave:'patrones', icono:'⌘', nombre:'Patrones y Secuencias', color:'#62c6ff'},
  {id:3, clave:'memoria', icono:'🌿', nombre:'Memoria', color:'#76cf45'},
  {id:4, clave:'deduccion', icono:'⌕', nombre:'Deducción', color:'#ffad42'},
  {id:5, clave:'estrategia', icono:'♜', nombre:'Estrategia y Decisiones', color:'#f36b59'},
  {id:6, clave:'matematicas', icono:'Σ', nombre:'Pensamiento Matemático', color:'#e9d34f'},
  {id:7, clave:'computacional', icono:'</>', nombre:'Pensamiento Computacional', color:'#4fd5dd'}
];

const RETOS = {
  1:{titulo:'DESAFÍO: LÓGICA', pregunta:'Si todos los lumis brillan y Nilo es un lumi, ¿qué sabemos de Nilo?', opciones:['No brilla','Brilla','Es invisible','No se puede saber'], correcta:1, explicacion:'Si una propiedad pertenece a todos los elementos del grupo, también pertenece a Nilo.', estrategia:'Deducción directa'},
  2:{titulo:'DESAFÍO: PATRONES', pregunta:'Observa la secuencia y elige el siguiente número: 2, 4, 8, 16, ?', opciones:['20','30','32','40'], correcta:2, explicacion:'La secuencia sigue el patrón de multiplicar por 2 cada término.', estrategia:'Patrones numéricos'},
  3:{titulo:'DESAFÍO: MEMORIA', pregunta:'Recuerda: luna, cristal, llave. ¿Cuál era el segundo objeto?', opciones:['Llave','Cristal','Luna','Libro'], correcta:1, explicacion:'El segundo elemento de la lista era cristal.', estrategia:'Agrupación visual'},
  4:{titulo:'DESAFÍO: DEDUCCIÓN', pregunta:'La puerta azul no es segura. La roja está cerrada. ¿Cuál puedes intentar abrir?', opciones:['La azul','La roja','Ninguna','Las dos'], correcta:1, explicacion:'La única puerta descrita como cerrada, no peligrosa, es la roja.', estrategia:'Descartar imposibles'},
  5:{titulo:'DESAFÍO: ESTRATEGIA', pregunta:'Tienes 3 movimientos para llegar a una meta a 6 pasos. ¿Qué avance necesitas por movimiento?', opciones:['1 paso','2 pasos','3 pasos','6 pasos'], correcta:1, explicacion:'Seis pasos divididos entre tres movimientos son dos pasos por movimiento.', estrategia:'Planificación inversa'},
  6:{titulo:'DESAFÍO: MATEMÁTICAS', pregunta:'¿Cuánto es 7 × 8?', opciones:['54','56','64','48'], correcta:1, explicacion:'Siete grupos de ocho suman cincuenta y seis.', estrategia:'Descomposición numérica'},
  7:{titulo:'DESAFÍO: COMPUTACIÓN', pregunta:'¿Qué instrucción se repite exactamente 4 veces en un bucle?', opciones:['La condición','El bloque interno','El resultado','La variable'], correcta:1, explicacion:'Un bucle repite el bloque de instrucciones que contiene.', estrategia:'Pensamiento algorítmico'}
};

const PRUEBAS_NIVEL = {
  1:[
    ['Si todos los orbes brillan y Luma es un orbe, ¿qué hace Luma?',['Brilla','Se apaga','Desaparece','No se sabe'],0,'La regla se aplica a todos los orbes, incluida Luma.'],
    ['Ningún cristal rojo es frío. Este cristal es rojo. ¿Cómo es?',['Frío','No es frío','Transparente','No se sabe'],1,'Si ningún cristal rojo es frío, este tampoco puede serlo.'],
    ['Todos los guardianes llevan llave. Arin no lleva llave. ¿Es guardián?',['Sí','No','Tal vez','Solo de noche'],1,'Si fuera guardián tendría una llave; al no tenerla, no lo es.'],
    ['A está antes que B y B antes que C. ¿Quién está primero?',['A','B','C','Empatan'],0,'La relación ordena directamente A, B y C.'],
    ['Solo una puerta es segura. La azul es peligrosa y la roja también. ¿Cuál queda?',['Azul','Roja','Verde','Ninguna'],2,'Al descartar azul y roja, la verde es la única posibilidad.'],
    ['Si llueve, el puente se cierra. El puente está abierto. ¿Está lloviendo?',['Sí','No','Quizá','Está nevando'],1,'Un puente abierto contradice la consecuencia de que esté lloviendo.'],
    ['Mara es mayor que Sol y Sol mayor que Nilo. ¿Quién es menor?',['Mara','Sol','Nilo','Iguales'],2,'Nilo queda al final del orden de edades.'],
    ['Todo nivel dorado da un logro. Ganaste un nivel dorado. ¿Qué recibes?',['Una vida','Un logro','Una pista','Nada'],1,'Aplicamos la regla general al nivel ganado.']
  ],
  2:[
    ['Completa: 2, 4, 8, 16, …',['20','24','32','34'],2,'Cada número se multiplica por 2.'],
    ['Completa: 3, 6, 9, 12, …',['13','14','15','18'],2,'La secuencia aumenta de 3 en 3.'],
    ['Completa: 1, 4, 9, 16, …',['20','24','25','32'],2,'Son cuadrados perfectos: 1², 2², 3², 4² y 5².'],
    ['Completa: 20, 17, 14, 11, …',['10','9','8','7'],2,'Cada término disminuye 3.'],
    ['Completa: 1, 1, 2, 3, 5, …',['6','7','8','10'],2,'Cada término suma los dos anteriores.'],
    ['Completa: 5, 10, 20, 40, …',['50','60','70','80'],3,'Cada término es el doble del anterior.'],
    ['Completa: 81, 27, 9, 3, …',['0','1','2','6'],1,'Cada término se divide entre 3.'],
    ['Completa: 2, 6, 12, 20, …',['24','28','30','32'],2,'Las diferencias son 4, 6, 8 y luego 10.']
  ],
  3:[
    ['Recuerda: luna, llave, cristal. ¿Qué estaba en medio?',['Luna','Llave','Cristal','Mapa'],1,'Llave era el segundo elemento.'],
    ['Recuerda: rojo, azul, verde, oro. ¿Cuál fue el tercero?',['Rojo','Azul','Verde','Oro'],2,'Verde ocupaba la tercera posición.'],
    ['Recuerda: 7, 2, 9, 4. ¿Qué número iba después del 2?',['7','9','4','6'],1,'La secuencia mostraba 2 seguido de 9.'],
    ['Recuerda: búho, zorro, tortuga. ¿Cuál apareció primero?',['Zorro','Búho','Tortuga','Lobo'],1,'Búho encabezaba la lista.'],
    ['Recuerda: norte, este, sur. ¿Cuál estaba al final?',['Norte','Oeste','Este','Sur'],3,'Sur era la última dirección.'],
    ['Recuerda: gema, libro, vela, pluma. ¿Qué iba antes de vela?',['Gema','Libro','Pluma','Llave'],1,'Libro aparecía inmediatamente antes de vela.'],
    ['Recuerda: 3, 8, 1, 6, 5. ¿Cuál era el cuarto?',['1','5','6','8'],2,'El cuarto número era 6.'],
    ['Recuerda: sol, río, torre, bosque. ¿Cuál no estaba?',['Río','Torre','Bosque','Montaña'],3,'Montaña no formaba parte de la lista.']
  ],
  4:[
    ['Hay huellas mojadas junto al lago. ¿Qué es más probable?',['Alguien salió del agua','Nevó','Hubo fuego','Nadie pasó'],0,'Las huellas mojadas apuntan al agua como origen.'],
    ['La vela está apagada y hay humo. ¿Qué ocurrió hace poco?',['La encendieron','La apagaron','La compraron','Amaneció'],1,'El humo reciente indica que la llama acaba de apagarse.'],
    ['Una caja cerrada suena al moverla. ¿Qué deduces?',['Está vacía','Tiene algo dentro','Es de oro','Está rota'],1,'El sonido implica que hay un objeto en su interior.'],
    ['El suelo está seco bajo un árbol y mojado alrededor. ¿Por qué?',['El árbol dio sombra','El árbol cubrió la lluvia','Es de noche','Hace calor'],1,'La copa impidió que la lluvia mojara esa zona.'],
    ['Solo Ada y Leo conocen la clave. Ada estaba lejos. ¿Quién abrió?',['Ada','Leo','Nadie','Cualquiera'],1,'Entre quienes conocen la clave, solo Leo estaba presente.'],
    ['Tres cofres: oro no está a la izquierda; plata está a la derecha. ¿Dónde queda oro?',['Izquierda','Centro','Derecha','Fuera'],1,'Si plata ocupa la derecha y oro no está a la izquierda, oro queda al centro.'],
    ['La alarma suena solo con movimiento. Está sonando. ¿Qué hubo?',['Silencio','Movimiento','Lluvia','Luz'],1,'El sonido de la alarma implica que detectó movimiento.'],
    ['Una planta se inclina hacia la ventana. ¿Qué busca?',['Agua','Tierra','Luz','Frío'],2,'Las plantas orientan su crecimiento hacia la fuente luminosa.']
  ],
  5:[
    ['Debes recorrer 12 pasos en 3 turnos iguales. ¿Cuántos por turno?',['3','4','5','6'],1,'12 dividido entre 3 es 4.'],
    ['Tienes una llave para dos puertas. ¿Qué conviene hacer primero?',['Romperla','Examinar símbolos','Elegir al azar','Tirarla'],1,'Observar información antes de actuar reduce el riesgo.'],
    ['Un rival repite siempre el mismo movimiento. ¿Qué ventaja tienes?',['Ninguna','Puedes anticiparlo','Pierdes turno','Debes imitarlo'],1,'Un patrón repetido permite predecir su próxima acción.'],
    ['Te quedan 10 puntos y cada acción cuesta 2. ¿Cuántas acciones puedes hacer?',['2','4','5','8'],2,'10 dividido entre 2 permite cinco acciones.'],
    ['Dos rutas: A tarda 5 min; B tarda 8 min. Buscas rapidez. ¿Cuál eliges?',['A','B','Ambas','Ninguna'],0,'La ruta A tiene el menor tiempo.'],
    ['Necesitas 3 gemas y ya tienes 2. ¿Cuál es la prioridad?',['Otra llave','Una gema','Cinco monedas','Descansar'],1,'Solo falta una gema para cumplir el objetivo.'],
    ['Un escudo bloquea un ataque y tienes dos ataques enemigos. ¿Qué haces?',['Usarlo antes del primero','Elegir el ataque más fuerte','No usarlo','Romperlo'],1,'Conviene reservar el recurso limitado para el mayor peligro.'],
    ['La meta requiere 20 XP y ganas 5 por reto. ¿Cuántos retos necesitas?',['2','3','4','5'],2,'20 dividido entre 5 son cuatro retos.']
  ],
  6:[
    ['¿Cuánto es 7 × 8?',['54','56','64','48'],1,'Siete grupos de ocho suman 56.'],
    ['¿Cuánto es 144 ÷ 12?',['10','11','12','14'],2,'12 multiplicado por 12 es 144.'],
    ['¿Cuál es el 25% de 80?',['15','20','25','30'],1,'Una cuarta parte de 80 es 20.'],
    ['Resuelve: 18 + 27',['35','45','46','55'],1,'18 más 27 es 45.'],
    ['Resuelve: 9²',['18','72','81','99'],2,'Nueve al cuadrado es 9 × 9 = 81.'],
    ['¿Cuál fracción equivale a 0.5?',['1/3','1/2','2/3','3/4'],1,'Un medio expresado en decimal es 0.5.'],
    ['Un triángulo tiene ángulos de 50° y 60°. ¿Cuánto mide el tercero?',['60°','70°','80°','90°'],1,'Los ángulos internos suman 180°: faltan 70°.'],
    ['Si x + 7 = 19, ¿cuánto vale x?',['10','11','12','13'],2,'Restamos 7 a 19 y obtenemos 12.']
  ],
  7:[
    ['¿Qué hace un bucle?',['Repite instrucciones','Borra el programa','Apaga la pantalla','Cambia el idioma'],0,'Un bucle ejecuta repetidamente un bloque.'],
    ['¿Qué representa una condición?',['Una imagen','Una decisión verdadero/falso','Un sonido','Un archivo'],1,'Una condición decide según sea verdadera o falsa.'],
    ['¿Qué guarda una variable?',['Un valor','Solo errores','Una pantalla','Internet'],0,'Una variable almacena un dato que el programa puede usar.'],
    ['¿Cuál es el primer paso al resolver un problema?',['Programar al azar','Entender el objetivo','Borrar datos','Repetir'],1,'Antes de crear una solución hay que comprender el problema.'],
    ['En una receta algorítmica, ¿qué importa?',['El orden','El color','La música','La suerte'],0,'El orden de los pasos determina el resultado.'],
    ['Si una condición es falsa, ¿qué rama se ejecuta?',['if','else','inicio','variable'],1,'La rama else maneja el caso falso.'],
    ['¿Qué ayuda a encontrar un error?',['Depurar','Duplicar','Ignorar','Cerrar'],0,'Depurar consiste en localizar y corregir fallos.'],
    ['¿Qué estructura contiene elementos ordenados?',['Lista','Color','Botón','Comentario'],0,'Una lista conserva una colección ordenada de elementos.']
  ]
};

function obtenerReto(habilidad,nivel){
  const h=HABILIDADES.find(x=>x.id===habilidad)||HABILIDADES[1];
  const pruebas=PRUEBAS_NIVEL[habilidad]||PRUEBAS_NIVEL[2];
  const especiales={
   '1-2':{p:['Encuentra la figura diferente.',['Fila 1, columna 3','Fila 2, columna 4','Fila 3, columna 2','Fila 3, columna 5'],1,'La palma está en la segunda fila, cuarta columna; todas las demás son cactus.'],visual:'🌵 🌵 🌵 🌵 🌵<br>🌵 🌵 🌵 🌴 🌵<br>🌵 🌵 🌵 🌵 🌵'},
   '1-6':{p:['¿Qué ficha completa la matriz?',['🔵','🟨','🔺','🟩'],2,'Cada fila contiene círculo, cuadrado y triángulo una sola vez.'],visual:'🔵 🟨 🔺<br>🟨 🔺 🔵<br>🔺 🔵 ❓'},
   '4-3':{p:['Los relojes avanzan dos horas. ¿Qué reloj continúa?',['🕕','🕖','🕗','🕘'],1,'La serie marca 1, 3 y 5; al sumar dos horas siguen las 7.'],visual:'🕐　→　🕒　→　🕔　→　❓'},
   '4-7':{p:['¿Cuál figura rompe el patrón?',['Mariposa azul','Mariposa rosa','Mariposa naranja','Abeja amarilla'],3,'La abeja es el único insecto que no es una mariposa.'],visual:'🦋　🦋　🦋<br>🦋　🐝　🦋'},
   '5-4':{p:['Cada flecha gira 90° a la derecha. ¿Qué sigue?',['⬆️','➡️','⬇️','⬅️'],0,'Después de izquierda, un giro de 90° a la derecha apunta hacia arriba.'],visual:'⬆️　➡️　⬇️　⬅️　❓'},
   '5-8':{p:['Mueve una ficha para equilibrar ambos lados. ¿Qué valor debe pasar?',['1','2','3','4'],1,'Mover el 2 del lado con 12 al lado con 8 deja ambos lados con 10.'],visual:'⚖️　12　┃　8'},
   '6-5':{p:['Resuelve el valor de la última fruta.',['2','3','4','5'],1,'Si tres manzanas valen 18, cada una vale 6. Dos bananas valen 8, cada una 4. Por tanto la pera vale 3.'],visual:'🍎 + 🍎 + 🍎 = 18<br>🍎 + 🍌 + 🍌 = 14<br>🍌 + 🍐 + 🍐 = 10'},
   '7-4':{p:['El robot debe llegar a la estrella evitando el muro. ¿Qué ruta sirve?',['→ → ↑ ↑','↑ → → ↑','↑ ↑ → →','→ ↑ ↑ ←'],1,'La segunda ruta rodea el muro y termina en la estrella.'],visual:'🤖　⬜　🧱<br>⬜　⬜　🧱<br>🧱　⬜　⭐'}
  };
  const especial=especiales[`${habilidad}-${nivel}`];
  let p=especial?especial.p:pruebas[nivel-1];
  if(!p){
    if(habilidad===2){
      const inicio=nivel+1, salto=Math.ceil(nivel/4), serie=Array.from({length:4},(_,i)=>inicio+i*salto),respuesta=inicio+4*salto;
      p=[`Completa: ${serie.join(', ')}, …`,[respuesta-salto,respuesta+salto,respuesta,respuesta+2*salto].map(String),2,`La secuencia aumenta ${salto} en cada paso.`];
    }else if(habilidad===6){
      const a=nivel+4,b=(nivel%6)+3,respuesta=a*b;
      p=[`¿Cuánto es ${a} × ${b}?`,[respuesta-b,respuesta+2,respuesta,respuesta+b].map(String),2,`${a} multiplicado por ${b} es ${respuesta}.`];
    }else{
      const base=pruebas[(nivel-1)%pruebas.length];
      p=[`${base[0]} (Reto avanzado ${nivel})`,[...base[1]],base[2],base[3]];
    }
  }
  const secuencia=habilidad===2?(p[0].match(/\d+/g)||[]).slice(0,4).concat('?'):null;
  return {titulo:`DESAFÍO: ${h.nombre.toUpperCase()} · NIVEL ${nivel}`,pregunta:p[0],opciones:p[1],correcta:p[2],explicacion:p[3],estrategia:`Nivel ${nivel}: ${h.nombre}`,secuencia,visual:especial?.visual||null};
}

function leerEstado(){
  const base={nivel:1,xp:0,meta:500,racha:0,logros:0,completados:0,correctos:0,vidas:3,niveles:{},progreso:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}};
  try{return {...base,...JSON.parse(localStorage.getItem(claveEstadoJugador())||'{}')}}catch{return base}
}
function claveEstadoJugador(){
  const usuario=usuarioInvitado();
  const identidad=(usuario?.nombre||'invitado').trim().toLocaleLowerCase('es');
  return 'enigma_estado_'+encodeURIComponent(identidad);
}
function guardarEstado(e){localStorage.setItem(claveEstadoJugador(),JSON.stringify(e))}
function registrarIngresoDiario(){
  if(!usuarioInvitado())return;
  const e=leerEstado(),hoy=new Date(),fechaHoy=[hoy.getFullYear(),hoy.getMonth()+1,hoy.getDate()].join('-');
  if(e.ultimoIngreso===fechaHoy)return;
  const ayer=new Date(hoy);ayer.setDate(ayer.getDate()-1);const fechaAyer=[ayer.getFullYear(),ayer.getMonth()+1,ayer.getDate()].join('-');
  e.racha=e.ultimoIngreso===fechaAyer?(e.racha||0)+1:1;e.ultimoIngreso=fechaHoy;guardarEstado(e);
}
registrarIngresoDiario();
function usuarioInvitado(){try{return JSON.parse(localStorage.getItem('enigma_invitado')||'null')}catch{return null}}
async function obtenerUsuarioActual(){return usuarioInvitado()}
async function obtenerPerfil(){const u=usuarioInvitado(),e=leerEstado();return {data:u?{id:u.id,nombre:u.nombre,nivel:e.nivel,xp:e.xp,xp_siguiente_nivel:e.meta,racha:e.racha,logros:e.logros}:null,error:null}}
async function cerrarSesion(){localStorage.removeItem('enigma_invitado')}
function completarReto(habilidad,correcto,xp=20,nivelReto=1){
  const e=leerEstado(); e.niveles=e.niveles||{}; e.completados++; if(correcto){e.correctos++;e.xp+=xp;e.progreso[habilidad]=Math.min(100,(e.progreso[habilidad]||0)+5);e.niveles[habilidad]=Math.max(e.niveles[habilidad]||1,Math.min(20,nivelReto+1));if(e.xp>=e.meta){e.xp-=e.meta;e.nivel++;e.meta=Math.round(e.meta*1.25);e.logros++}}else{e.vidas=Math.max(0,e.vidas-1)} guardarEstado(e); return e;
}

const RETOS_DIARIOS=[
 {titulo:'Ecuación visual',pregunta:'🍎 + 🍎 + 🍎 = 30\n🍎 + 🍌 + 🍌 = 18\n🍌 + 🍇 + 🍇 = 10\n¿Cuánto vale 🍎 + 🍌 × 🍇?',opciones:['26','24','22','20'],correcta:2,explicacion:'Manzana=10, banana=4 y uvas=3. Primero se multiplica: 10 + 4×3 = 22.',xp:60},
 {titulo:'Secuencia avanzada',pregunta:'2, 3, 5, 9, 17, ¿?',opciones:['25','31','33','35'],correcta:2,explicacion:'Las diferencias son 1, 2, 4 y 8; la siguiente es 16. Entonces 17+16=33.',xp:60},
 {titulo:'Deducción de guardianes',pregunta:'A dice: “B miente”. B dice: “C miente”. C dice: “A y B mienten”. Solo uno dice la verdad. ¿Quién?',opciones:['A','B','C','Ninguno'],correcta:1,explicacion:'Si B dice la verdad, C miente y la afirmación de A también es falsa. Es la única combinación válida.',xp:70},
 {titulo:'Patrón matricial',pregunta:'Fila 1: ▲ ● ■\nFila 2: ● ■ ▲\nFila 3: ■ ▲ ¿?',opciones:['▲','●','■','◆'],correcta:1,explicacion:'Cada fila desplaza las figuras una posición a la izquierda; falta el círculo.',xp:65},
 {titulo:'Planificación',pregunta:'Debes cruzar un puente con tiempos de 1, 2, 7 y 10 minutos. Solo cruzan dos y necesitan una lámpara. ¿Tiempo mínimo?',opciones:['17 min','19 min','21 min','24 min'],correcta:0,explicacion:'Cruzan 1-2, vuelve 1; cruzan 7-10, vuelve 2; cruzan 1-2: total 17.',xp:80}
];
function retoDiarioActual(){const inicio=new Date(new Date().getFullYear(),0,0),dia=Math.floor((new Date()-inicio)/86400000);return RETOS_DIARIOS[dia%RETOS_DIARIOS.length]}
function navInferior(activo){return `<nav class="nav-inferior"><a class="nav-item ${activo==='inicio'?'activo':''}" href="home.html"><b>⌂</b>Inicio</a><a class="nav-item" href="mapa.html"><b>▣</b>Misiones</a><a class="nav-item ${activo==='habilidades'?'activo':''}" href="modos.html"><b>✤</b>Habilidades</a><a class="nav-item" href="#"><b>🛒</b>Tienda</a><a class="nav-item ${activo==='perfil'?'activo':''}" href="perfil.html"><b>♟</b>Perfil</a></nav>`}
function exigirUsuario(){if(!usuarioInvitado()){location.href='Login.html';return false}return true}

// ---------- Ajustes globales: idioma y sonido ----------
const AJUSTES_BASE={idioma:'es',sonidos:true,musica:false,mezcla:'focus',volumen:35};
function leerAjustes(){try{return {...AJUSTES_BASE,...JSON.parse(localStorage.getItem('enigma_ajustes')||'{}')}}catch{return {...AJUSTES_BASE}}}
function guardarAjustes(a){localStorage.setItem('enigma_ajustes',JSON.stringify(a))}

const TRADUCCIONES={
 en:{
  'Inicio':'Home','Misiones':'Missions','Habilidades':'Skills','Tienda':'Shop','Perfil':'Profile','Ajustes':'Settings','Cerrar':'Close','Idioma':'Language','Sonidos de teclas y botones':'Keyboard and button sounds','Música para concentrarse':'Focus music','Mezcla musical':'Music mix','Volumen':'Volume','Enfoque profundo':'Deep focus','Bosque tranquilo':'Quiet forest','Calma nocturna':'Night calm','Cerrar sesión':'Log out','RETO DEL DÍA':'DAILY CHALLENGE','MODOS DE ENTRENAMIENTO':'TRAINING MODES','Elige una habilidad para entrenar':'Choose a skill to train','MAPA DE DESAFÍOS':'CHALLENGE MAP','Tu aventura mental':'Your mental adventure','MI PERFIL':'MY PROFILE','ESTADÍSTICAS GENERALES':'GENERAL STATISTICS','FORTALEZAS':'STRENGTHS','CONTINUAR':'CONTINUE','VER EXPLICACIÓN':'VIEW EXPLANATION','EXPLICACIÓN':'EXPLANATION','ESTRATEGIA APRENDIDA':'LEARNED STRATEGY','Pista':'Hint','Eliminar 2 opciones':'Remove 2 options','Encuentra las cinco parejas de imágenes. Recuerda dónde está cada una.':'Find the five image pairs. Remember where each one is.'
 },
 pt:{
  'Inicio':'Início','Misiones':'Missões','Habilidades':'Habilidades','Tienda':'Loja','Perfil':'Perfil','Ajustes':'Configurações','Cerrar':'Fechar','Idioma':'Idioma','Sonidos de teclas y botones':'Sons de teclas e botões','Música para concentrarse':'Música para concentração','Mezcla musical':'Mix musical','Volumen':'Volume','Enfoque profundo':'Foco profundo','Bosque tranquilo':'Floresta tranquila','Calma nocturna':'Calma noturna','Cerrar sesión':'Sair','RETO DEL DÍA':'DESAFIO DO DIA','MODOS DE ENTRENAMIENTO':'MODOS DE TREINAMENTO','Elige una habilidad para entrenar':'Escolha uma habilidade para treinar','MAPA DE DESAFÍOS':'MAPA DE DESAFIOS','Tu aventura mental':'Sua aventura mental','MI PERFIL':'MEU PERFIL','ESTADÍSTICAS GENERALES':'ESTATÍSTICAS GERAIS','FORTALEZAS':'PONTOS FORTES','CONTINUAR':'CONTINUAR','VER EXPLICACIÓN':'VER EXPLICAÇÃO','EXPLICACIÓN':'EXPLICAÇÃO','ESTRATEGIA APRENDIDA':'ESTRATÉGIA APRENDIDA','Pista':'Dica','Eliminar 2 opciones':'Eliminar 2 opções','Encuentra las cinco parejas de imágenes. Recuerda dónde está cada una.':'Encontre os cinco pares de imagens. Lembre-se de onde cada um está.'
 }
};
function aplicarIdioma(idioma){
 document.documentElement.lang=idioma; if(idioma==='es')return;
 const dic=TRADUCCIONES[idioma]||{};
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 const nodos=[];while(walker.nextNode())nodos.push(walker.currentNode);
 nodos.forEach(n=>{const limpio=n.nodeValue.trim();if(dic[limpio])n.nodeValue=n.nodeValue.replace(limpio,dic[limpio]);else if(/^¡Hola, .+!$/.test(limpio))n.nodeValue=n.nodeValue.replace(limpio,idioma==='en'?limpio.replace('¡Hola','Hello').replace('!','!'):limpio.replace('¡Hola','Olá'))});
}

let audioEnigma=null,temporizadorMusica=null,nodoMusica=null;
function contextoAudio(){if(!audioEnigma)audioEnigma=new (window.AudioContext||window.webkitAudioContext)();if(audioEnigma.state==='suspended')audioEnigma.resume();return audioEnigma}
function sonarTecla(tipo='tecla'){
 const a=leerAjustes();if(!a.sonidos)return;const ctx=contextoAudio(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=tipo==='boton'?'sine':'triangle';osc.frequency.value=tipo==='boton'?520:300+Math.random()*90;gain.gain.setValueAtTime(.035*(a.volumen/100),ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.07);osc.connect(gain).connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.075);
}
function detenerMusica(){if(temporizadorMusica)clearInterval(temporizadorMusica);temporizadorMusica=null;if(nodoMusica){try{nodoMusica.stop()}catch{}nodoMusica=null}}
function iniciarMusica(){
 detenerMusica();const a=leerAjustes();if(!a.musica)return;const ctx=contextoAudio();
 const escalas={focus:[220,261.63,329.63,392],forest:[196,246.94,293.66,369.99],calm:[174.61,220,261.63,329.63]},notas=escalas[a.mezcla]||escalas.focus;
 const tocar=()=>{const osc=ctx.createOscillator(),gain=ctx.createGain(),filtro=ctx.createBiquadFilter();nodoMusica=osc;osc.type=a.mezcla==='calm'?'sine':'triangle';osc.frequency.value=notas[Math.floor(Math.random()*notas.length)]/2;filtro.type='lowpass';filtro.frequency.value=900;const ahora=ctx.currentTime,vol=.055*(a.volumen/100);gain.gain.setValueAtTime(.0001,ahora);gain.gain.exponentialRampToValueAtTime(vol,ahora+.8);gain.gain.exponentialRampToValueAtTime(.0001,ahora+3.8);osc.connect(filtro).connect(gain).connect(ctx.destination);osc.start(ahora);osc.stop(ahora+4)};
 tocar();temporizadorMusica=setInterval(tocar,3200);
}
function montarAjustes(){
 if(!usuarioInvitado()||location.pathname.toLowerCase().endsWith('login.html'))return;
 registrarIngresoDiario();
 const a=leerAjustes();document.body.insertAdjacentHTML('beforeend',`<button id="abrirAjustes" class="btn-ajustes" aria-label="Ajustes">⚙</button><div id="modalAjustes" class="modal-ajustes oculto"><div class="ajustes-panel"><div class="ajustes-cabecera"><h2>Ajustes</h2><button id="cerrarAjustes" aria-label="Cerrar">×</button></div><label>Idioma<select id="ajusteIdioma"><option value="es">Español</option><option value="en">English</option><option value="pt">Português</option></select></label><label class="ajuste-switch"><span>Sonidos de teclas y botones</span><input id="ajusteSonidos" type="checkbox"></label><label class="ajuste-switch"><span>Música para concentrarse</span><input id="ajusteMusica" type="checkbox"></label><label>Mezcla musical<select id="ajusteMezcla"><option value="focus">Enfoque profundo</option><option value="forest">Bosque tranquilo</option><option value="calm">Calma nocturna</option></select></label><label>Volumen <output id="valorVolumen">${a.volumen}%</output><input id="ajusteVolumen" type="range" min="0" max="100" value="${a.volumen}"></label><p class="nota-audio">La música es una mezcla instrumental suave generada para acompañar sesiones de concentración.</p></div></div>`);
 ajusteIdioma.value=a.idioma;ajusteSonidos.checked=a.sonidos;ajusteMusica.checked=a.musica;ajusteMezcla.value=a.mezcla;
 abrirAjustes.onclick=()=>modalAjustes.classList.remove('oculto');cerrarAjustes.onclick=()=>modalAjustes.classList.add('oculto');modalAjustes.onclick=e=>{if(e.target===modalAjustes)modalAjustes.classList.add('oculto')};
 const actualizar=()=>{const nuevo={idioma:ajusteIdioma.value,sonidos:ajusteSonidos.checked,musica:ajusteMusica.checked,mezcla:ajusteMezcla.value,volumen:+ajusteVolumen.value};guardarAjustes(nuevo);valorVolumen.textContent=nuevo.volumen+'%';nuevo.musica?iniciarMusica():detenerMusica()};
 ajusteIdioma.onchange=()=>{actualizar();location.reload()};ajusteSonidos.onchange=actualizar;ajusteMusica.onchange=actualizar;ajusteMezcla.onchange=actualizar;ajusteVolumen.oninput=actualizar;
 aplicarIdioma(a.idioma);
}
document.addEventListener('keydown',e=>{if(!e.ctrlKey&&!e.metaKey&&!e.altKey)sonarTecla('tecla')});
document.addEventListener('click',e=>{if(e.target.closest('button,.nav-item,.modo-card,.nodo'))sonarTecla('boton')});
document.addEventListener('DOMContentLoaded',montarAjustes);
