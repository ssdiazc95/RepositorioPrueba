"# RepositorioPrueba" 

- En el repositorio se pueden encontrar tres carpetas.

## BASE DE DATOS
En Base_de_Datos, se encuentran dos archivos. Uno corresponde al archivo yaml de configuración para contenerizar MySQL con docker.
Para hacer esto se debe abrir una terminal en esa ubicación, y ejecutar el comando: 
	`docker-compose up -d`
Hay un segundo archivo en donde se encuentran los comandos para la creación de las dos tablas necesarias.

## FrontEnd
En Person_Components se encuentra la aplicación angular con el frontEnd. Para iniciar esta, se debe tener instalada la Angular CLI, y desde ella
ejecutar el comando:
	`npm i`
Con esto se empezarán a descargar las diferentes dependencias. Cuando ya se hayan descargado todas, se proceda a escribir el siguiente comando:
	`ng s`
Este comando pondrá a correr el proyecto en una url local en el puerto 4200

## API
En la carpeta Person_API se encuentra la API. Para poder ejecutarla, se debe tener en el equipo la suite de SpringBoot. Cuando este abierta la suite
se procede a importar un proyecto maven existente, y se selecciona el directorio del proyecto, una vez descargadas las dependencias e importado el 
proyecto se procede a correrlo localmente.
