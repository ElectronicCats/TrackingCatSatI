# Tracking CatSat

Tracking CatSat permite conectar, monitorear y controlar por medio de un puerto serial los dispositivos de Electronic Cats como el Cat Sat 1, Cat Sat Zero, entre otros de los productos de Electronic Cats y graficar los datos

## Quick start

1. Descargar ejecutable dependiendo su sistema operativo en [releases](https://github.com/ElectronicCats/TrackingCatSatI/releases/tag/2.0.0)
2. Ejecutar y seleccionar puerto serial
3. Preciona el botton de connect

## Advanced Install

1. git clone `https://github.com/ElectronicCats/TrackingCatSatI.git`
2. `cd TrackingCatSatI`
3. `npm install`
4. `npm start`

## Serialdata order

- `ID,temp1,hum,press,temp2,mx,my,mz,ax,ay,az,gx,gy,gz,lat,long,alt,vel,RSSI`

## Preview

![Preview](/doc/Captura.png)

## Project technologies

- Node.js
- React
- Redux
- Serialport
- Electron
- Babel

## Log

- the first time you run the application a new folder will be created within your `/Documents/electroniccats-trackingcat` and in a new file called `log.txt` where you will find all the history of data obtained by your CatSat.

in the case of linux the file is in the directory of `/home/electroniccats-trackingcat``

# License

Electronic Cats invests time and resources providing this open source design, please support Electronic Cats and open-source hardware by purchasing products from Electronic Cats!

Released under an MIT license. See the LICENSE file for more information.
