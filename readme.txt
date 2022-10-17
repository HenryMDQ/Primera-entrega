Este trabajo final tiene por objetivo permitir: 

- Publicar una página web con publicidad de los equipos desarrollados en la empresa que trabajo actualmente.

- Ingresar a un menu privado para cada empresa y para el área de venta y producción, con el objetivo de organizar la venta de equipos y coordinar con producción.

- Ver el estado de una red de equipos que reportan a una base de datos (Internet of things) en tiempo real.

- ver el historial de compras y de reparaciones.

- Realizar consultas a soporte 


Esta primera entrega solo tiene habilitado: 

- Página Principal

- El modal de login no posee backend y por ende puede poner cualquier cosa e ingresa al CRUD.

- El menú del CRUD habilitará los accesos según el perfil del usuario, este se va a realizar con Mongo, pero ahora está hardcodeado con un json. Hoy solo se muestra el administrador.

- Dentro del menú esta habilitado Productos -> Comparar. No tiene backend por lo tanto se aplica un json para generar los productos

- También está habilitado Dispositivos -> Mapas. En este caso utilizó una librería de mapas llamada Leafletjs. Posee un json con 500 puntos reales que se muestran en el mapa colorado según su nivel de señal. A futuro los puntos los tomará de Mongo.

====== Es importante aclarar que el trabajo cuando quede terminado incluso deberá recibir los mensajes de los equipos remotos y guardarlos en la base de datos. 
========