# Tracking CatSat I

Este es un sistema basado en nodejs utilizado para el seguimiento en estación terrena del CatSat I en tiempo real por medio de GPS y comunicación LoRa.

## Instalacion normal (MacOS y Linux)

- Instalar Node.js 8.12.0
- Clonar`https://github.com/ElectronicCats/TrackingCatSatI` a TrackingCatSatI folder 
- ir a TrackingCatSatI, abrir terminal y ejecutar

`npm install`

## Instalaciones especiales Windows

- Instalar Node.js 8.12.0
- Clonar`https://github.com/ElectronicCats/TrackingCatSatI` 
- Abrir terminal de Windows e ir a la carpeta TrackingCatSatI 
- Ejecutar los siguientes comandos

`npm install --global --production windows-build-tools`

`npm install --msvs_version=2015`

## Ejecutar programa

- Editar el archivo app.js con el puerto serial correspondiente a donde esta conectada la estacion terrena

En la linea 43 [https://github.com/ElectronicCats/TrackingCatSatI/blob/master/app.js#L43](https://github.com/ElectronicCats/TrackingCatSatI/blob/master/app.js#L43)

Guardar el archivo y ejecutar desde terminal

`node app.js `

- Abrir tu navegador favorito e ir a:

`localhost:3000`

## Tecnologias del proyecto.

- Node.js
- Socket.io
- Lora 915Mhz
- Stylus
- Jade
- CatSat
- Open Street Map

Gracias @iddar por el codigo inicial

Electronic Cats invests time and resources providing this open source design, please support Electronic Cats and open-source hardware by purchasing products from Electronic Cats!

Released under an MIT license. See the LICENSE file for more information.
