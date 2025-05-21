# YourStream

**Desarrollado por:** Jalil Samas Mendoza Reyes

## 1. Resumen
Esta página es una simulación de un servicio de streaming llamada YourStream.  
Cuenta con un diseño sencillo pero intuitivo para los usuarios.

## 2. Requerimientos técnicos
- Tecnologías utilizadas: HTML, JavaScript, Bootstrap, SCSS, Angular, C#, SQL Server Management Studio 20, .Net 9, SDK 9 y Thunder Client.

## 3. Cómo instalar
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

Para el backend deberas usar dotnet run y usar Thunder Client para usar el CRUD.

## 4. Mockup de la aplicación
<img src="Pagina/Imagenes/Mockup.png" width="600" alt="Mockup">

## 5. Capturas de pagina en funcionamiento

<img src="Pagina/Imagenes/Inicio2.png" width="600" alt="Menu">

<img src="Pagina/Imagenes/Series.png" width="600" alt="Series">

<img src="Pagina/Imagenes/Preferencias.png" width="600" alt="Favoritos">

<img src="Pagina/Imagenes/Accion.png" width="600" alt="Generos">

<img src="Pagina/Imagenes/IniciarSesión.png" width="600" alt="Inicio de sesión">
Esta es la única página con un diseño diferente, donde podrás iniciar sesión en tu cuenta de usuario. 
Actualmente, esta función está en desarrollo, por lo que al intentar iniciar sesión serás redirigido automáticamente a la página de inicio.

## Tests

<img src="Pagina/Imagenes/codeCoverage.png" width="600" alt="codeCoverage">

<img src="Pagina/Imagenes/Karma.png" width="600" alt="Karma">

<img src="Pagina/Imagenes/PruebaS.png" width="600" alt="PruebaS">

<img src="Pagina/Imagenes/PruebaS2.png" width="600" alt="PruebaS2">

<img src="Pagina/Imagenes/PruebaHTML.png" width="600" alt="PruebaHTML">

<img src="Pagina/Imagenes/PruebaHTML2.png" width="600" alt="PruebaHTML2">

## Prueba de login

<img src="Pagina/your-stream/src/assets/imagenes/LoginT.png" width="600" alt="LoginT">

## Proceso de creación 4
1. Implementación de T-SQL y Estructura de Base de Datos

- Se diseñó y creó un esquema de base de datos en SQL Server Management Studio (SSMS) con tablas para géneros, películas, etc.

- Las tablas fueron mapeadas correctamente a entidades en Entity Framework Core mediante el ApplicationDbContext.

- Se generó una migración inicial (baseline) que establece la estructura completa de la base de datos.

2. Sistema de Autenticación Seguro
   
- Se implementaron endpoints RESTful para registro y login (/api/auth/register y /api/auth/login).

- La autenticación utiliza JSON Web Tokens (JWT) para seguridad, generando tokens con tiempo de expiración.

- Todos los endpoints protegidos fueron decorados con el atributo [Authorize] para garantizar acceso solo a usuarios autenticados.

3. Consumo de Datos desde Frontend

- Se desarrollaron controladores CRUD completos para gestionar géneros, películas, series y favoritos (faltan conectarlo totalmente).

- El frontend Angular consume estos endpoints mediante servicios HTTP.

- Se implementó un interceptor Angular que añade automáticamente el token JWT a las cabeceras de las peticiones.

4. Funcionalidad de Login Completa
   
- El sistema de login es completamente funcional, almacenando el token JWT en el almacenamiento local del navegador.

- El token se utiliza para mantener la sesión del usuario y para autorizar peticiones subsiguientes.

5. Arquitectura Moderna
   
- La aplicación Angular fue configurada usando el enfoque standalone (sin AppModule tradicional).

- Las rutas están protegidas con un AuthGuard que redirige a los usuarios no autenticados al login.

## 6. Sprint Review 4

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien? |
|------------------|-----------------------------|---------------------|
| -Se logro desarrollar el backed con C# y establecer una conexión con la base de datos. <br> - Se hicieron cambios en el login para poder conectarla a la API con exito. <br> -  Protección de rutas con AuthGuard. <br> | - El consumo total de la API se debe llevar a cabo. <br> - Solo se registran usarios mediante Thunder Client, no estoy seguro si cambiarlo, al ser unico usuario. <br> | - No desarrolle una estructura clara al inicio de la creación del backend, lo que me llevo a muchos problemas. <br> - Perdi mucho tiempo conectando C# a mi base de datos y trabajando con versiones incorrectas en mi backend, al final borre como 7 horas de trabajo, para iniciar de nuevo.


