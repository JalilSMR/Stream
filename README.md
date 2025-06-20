# YourStream

**Desarrollado por:** Jalil Samas Mendoza Reyes

## Resumen
Esta página es una simulación de un servicio de streaming llamada YourStream.  
Cuenta con un diseño sencillo pero intuitivo para los usuarios.


## Requerimientos técnicos

- Tecnologías utilizadas: HTML, JavaScript, Bootstrap, SCSS, Angular 18+, C#, SQL Server Management Studio 20, .Net 9, SDK 9, Thunder Client, Swagger.


## Cómo instalar

### Prerrequisitos:
- Git instalado
- Cuenta en GitHub
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

### Pasos:

1. Clonar el repositorio:

git clone https://github.com/tu-usuario/nombre-repositorio.git

2. Abrir el proyecto your-stream y YourStream.Api:

  Abres los dos con code .

3. Ejecutar la página:

Al ser un proyecto en angular, deberas usar ng s, para iniciar la pagina y poder verla en el ordenador.

Para el backend deberas usar dotnet run en una terminal de powershell y usar Thunder Client para usar el CRUD.


### Importante:

Deberas crear un usuario desde la base de datos y iniciar sesión para poder ver el contenido, de lo contrario solo tendras acceso al inicio y al login.

O si lo prefieres, puedes usar este usuario de prueba.

Usuario: usuario1

Contraseña: P@ssw0rd!

## Mockup de la aplicación

<img src="Pagina/Imagenes/Mockup.png" width="600" alt="Mockup">

## Capturas de pagina en funcionamiento

<img src="Pagina/Imagenes/Inicio2.png" width="600" alt="Menu">

<img src="Pagina/Imagenes/Series.png" width="600" alt="Series">

<img src="Pagina/Imagenes/Preferencias.png" width="600" alt="Favoritos">

<img src="Pagina/Imagenes/Accion.png" width="600" alt="Generos">

<img src="Pagina/Imagenes/IniciarSesión.png" width="600" alt="Inicio de sesión">
Esta es la única página con un diseño diferente, donde podrás iniciar sesión en tu cuenta de usuario. 
Actualmente, esta función está en desarrollo, por lo que al intentar iniciar sesión serás redirigido automáticamente a la página de inicio.

## Prueba de login

<img src="Pagina/your-stream/src/assets/imagenes/LoginT.png" width="600" alt="LoginT">

## Diagrama de base de datos

<img src="Pagina/your-stream/src/assets/imagenes/DB.png" width="600" alt="DB">

Puedes encontrar el script en los archivos

## Problemas conocidos

- Se necesita crear un usuario desde la base de datos o usar el proporcionado en el README y iniciar sesión. De lo contrario solo tienes acceso al inicio y al login.

- El footer se contrae cuando se cambia de página, ya que simula que hace una carga y no muestra el contenido al instante. Después de esa simulación, se ve correctamente.

- En géneros hay un error al usar los espacios para las cards, que provoca que se apilen y no estén alineadas.

- Hay algunos problemas con el responsive.

## Proceso de creación Final

- Se agregó el Dockerfile para YourStream.Api.

- Se agregó el Dockerfile para your-stream.

- Se solucionó un problema menor en el login.

## Sprint Review Final

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien? |
|------------------|-----------------------------|---------------------|
| - Se agregaron los archivos Dockerfile tanto para el frontend como para el backend. <br> - Se puede acceder correctamente a los datos desde la base de datos. <br> | - Podría haberse implementado una confirmación visual al iniciar sesión y también un cierre de sesión. <br> Un formulario de registro habría evitado tener que crear usuarios directamente en la base de datos o mediante Postman. <br> | - El tiempo debió administrarse mejor. <br> - Intenté implementar funcionalidades que terminé descartando debido a errores cometidos. <br> - Intentar hacer cambios demasiado grandes me llevó a cometer errores y perder consistencia en el diseño.


