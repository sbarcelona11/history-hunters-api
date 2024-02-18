# Taller Frontend 2024 - CTC

## API Rest para Cazadores de historia
Este API Rest fue construido para poder trabajar sobre la letra del obligatorio del taller de Frontend 2024.
### Requisitos
- NodeJs 12 o superior
- Npm instalado

### Instalacion
1 - Clonar o descargar el repositorio.  
2 - Ejecutar npm install para instalar las dependencias.  
3 - Ejecutar la aplicación con ```npm start``` si desea levantar el modo desarrollo.  
4 - Para correr en modo produccion, ejecutar ```npm run start:prod```


### Uso
Una ves que la aplicacion este corriendo, podremos consumir la informacion de los diferents endpoints.
La documentacion para este API Rest, esta contenida en archivo ```History Hunter API.postman_collection.json``` el cual tienen que importar dentro de Postman.
Cada endpoint tiene un ejemplo de uso dentro.

### Docker
Para correr la aplicacion en un contenedor de Docker, se debe ejecutar el siguiente comando:
```docker build -t ctc .```  
```docker run -p 4000:4000 ctc```

### Docker-compose
Para correr la aplicacion en un contenedor de Docker, se debe ejecutar el siguiente comando:
```docker-compose up```

### Deploy on AWS
```pm2 start npm --name "ctc" -- start```  
```pm2 stop```  
```pm2 logs```  
```pm2 status```

### Deploy on 




### Contacto
* [Sebastian Barcelona](https://www.linkedin.com/in/sebastian-barcelona-01565297/)
* [Instituto CTC](https://ctc.edu.uy/sede/colonia/)
