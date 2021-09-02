# Contacto tel: 3508191586 correo: pintoeric16@gmail.ocm
# tissini-proyect 


## Como un plus a esta prueba se le integro GitHub Actions para realizar el despliegue en hostinger.
### Esta configuracion esta en el archivo push.yml

## Modulos desarrollados:
- Autenticacion
- Home

### Autenticacion: 
#### Analizando las peticiones que realiza la app de prueba adjunta en el pdf, se encuentra el sigiente endpoint de tipo POST.

#### https://v3.tissini.app/api/v3/login/client

#### que recibe el un objeto con el atributo mobilephone 

```
{
    "mobilephone": "7865470213"
}
```
#### se desarrollan los métodos Login y Logout, haciendo uso del localStorage y se negando el acceso desde el archivo de rutas.

### Home: 
#### En este se encuentran los siguientes: 

- tipo GET https://v3.tissini.app/api/v3/categories/sections retorna las secciones y sus productos.
- tipo GET https://v3.tissini.app/api/v3/categories retorna las categorias.

#### Despues de autenticado un usuario puede ver las secciones, categorías y productos consumidos mediante los end points antes mencionados

### Anotaciones: 
- El carrusel se carga desde un json en el archivo categories.js en la carpeta src
- La prueba esta desplegada en el siguiente dominio http://www.dianagonzalezw.com/


## Project setup
```
npm install
```

### Compiles for development
```
npm run serve
```

### Compiles for production
```
npm run build