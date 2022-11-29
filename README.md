Las tecnologías con que desarrollé dicho proyecto están basadas en JavaScript 
como lo son Nodejs (tecnología usada para la creación de todo el Back-End) 
el cual se encarga de crear la API y permitirme cargar toda la información 
a MongoDB, el cual esta siendo usado como sistema gestor de base de datos no 
relacional para archivos JSON.

Por otro lado, en el Front-End tenemos a Angular el cual depende directamente de NPM, 
siendo este el gestor de consola para el mismo, el que nos permite instalar paquetes y 
cosas necesarias para poder correr, angular cuenta con una peculiaridad y es que es tanto 
Back como Front, por lo tanto, trabaja con TypeScrip y EcmaScript.

Los estándares definidos para JavaScript en general son los de ECMAScript (ECMA-262) y para 
la especificación de las API es (ECMA-402), estos estándares se rigen por las últimas versiones 
de cada una.

Ahora bien, para poder correr el “prototipo” es necesario tener instalados, NPM y NodeJS (versión LTS), 
debido a que son los gestores principales de todo, una vez instalados es necesario tener en cuenta en qué 
lugar está el proyecto, en una primera instancia, es necesario correr el servidor (carpeta “server”) desde 
la consola, podemos ingresar con el comando cd.

Supongamos que estamos en escritorio y allí tenemos la carpeta base de todo en la barra superior de la ventana 
de Windows, donde aparece el nombre de la carpeta anteriormente, digitamos por encima de todo “cmd”.

Se abrirá la consola y allí digitaremos la ruta “cd server”, estando dentro de esta carpeta ejecutamos 
el siguiente comando para reinstalar la carpeta “node_modules”; “npm install”, esto nos devolverá las dependencias 
que necesita en un primer caso el servidor para poder correr, el siguiente comando a ejecutar es “npm run dev” esto 
lo que hace es poner en marcha directamente el servidor, este nos mostrará “server running” y “DB conncet”, allí sabremos 
que todo quedo correctamente.

Después, sin cerrar la ventana anterior, nos dirigimos al mismo paso para abrir el “cmd”, pero, esta vez, 
entraremos en la carpeta “client”, es decir, “cd client” para ingresar por consola a esta, 
después es necesario ejecutar el comando “npm install” para recuperar la carpeta “node_modules”, 
cuando ya termine este proceso, podremos correr el servidor del Front con el siguiente comando: “ng serve --open” 
para que nos lance a una pestaña de nuestro navegador por default y es allí donde podremos ver el resultado final.

Cabe resaltar, que es necesario permanecer con las dos ventanas de la consola abierta, debido a qué, 
cada parte depende de la ejecución de la otra.


Psdt: debido a las limitaciones de seguridad de las tecnologías y por mi error, no pude realizar 
la operación FTP para guardar el archivo JSON, por otra parte, si se puede descargar, 
espero cumpla con la mayor parte de sus expectativas y muchas gracias por esta oportunidad.



Andres Escobar Vélez.