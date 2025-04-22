# YourStream

**Desarrollado por:** Jalil Samas Mendoza Reyes

## 1. Resumen
Esta página es una simulación de un servicio de streaming llamada YourStream.  
Cuenta con un diseño sencillo pero intuitivo para los usuarios.

## 2. Requerimientos técnicos
- Tecnologías utilizadas: HTML, JavaScript, Bootstrap, SCSS y Angular.

## 3. Cómo instalar
### Prerrequisitos:
- Git instalado
- Cuenta en GitHub
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

### Pasos:

1. Clonar el repositorio:

git clone https://github.com/tu-usuario/nombre-repositorio.git

2. Abrir el proyecto:

  code .

3. Ejecutar la página:

Al ser un proyecto en angular, deberas usar ng s, para iniciar la pagina y poder verla en el ordenador.

## 4. Mockup de la aplicación
<img src="Pagina/Imagenes/Mockup.png" width="600" alt="Mockup">

## 5. Capturas de pagina en funcionamiento

<img src="Pagina/Imagenes/Inicio.png" width="600" alt="Menu">
Esta es la página principal donde encontrarás todas las películas disponibles. 
Puedes expandir o contraer las sinopsis según tu preferencia, además de contar con un botón para eliminar cada tarjeta. 
Este diseño uniforme se mantiene en todas las secciones, excepto en la página de inicio de sesión.

<img src="Pagina/Imagenes/IniciarSesión.png" width="600" alt="Inicio de sesión">
Esta es la única página con un diseño diferente, donde podrás iniciar sesión en tu cuenta de usuario. 
Actualmente, esta función está en desarrollo, por lo que al intentar iniciar sesión serás redirigido automáticamente a la página de inicio.

## Proceso de creación
Para reducir la complejidad del diseño, usé Bootstrap, lo cual me ahorró tiempo en las secciones principales de cada página (nav, body).

Desplegué un navbar con mis páginas y luego me centré en la creación del body, haciendo columnas de 3 para presentar las películas. Utilicé cards y añadí información como el género y la sinopsis de las películas.

Al final, desplegué un footer para mejorar la simulación, pero falta agregar un modal para mostrar los dos enlaces que contiene.

Este diseño se repitió en las demás páginas, por lo que hay ligeras diferencias. Sin embargo, en la página de inicio de sesión, hubo cambios para simular el inicio del usuario. Aún hay trabajo pendiente, ya que al usar el botón de inicio de sesión, te redirige al menú principal.

## Proceso de creación 2
Descargué e instalé las últimas versiones de Angular para comenzar con una base actualizada y optimizada.

Diseñé y organicé la estructura del proyecto, creando componentes específicos para cada página con el fin de mantener una arquitectura clara y modular.

Implementé la lógica necesaria para migrar el contenido y funcionalidades del proyecto original, asegurando que cada página mantuviera su comportamiento original en Angular.

Una vez finalizada la migración, realicé mejoras visuales utilizando SCSS y estilos personalizados, con el objetivo de optimizar la experiencia del usuario y modernizar la interfaz.


## 6. Sprint Review 2

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien? |
|------------------|-----------------------------|---------------------|
| - Se completó la migración de todas las páginas, sin omitir ningún componente ni funcionalidad. <br> - Se integró SCSS para mejorar la presentación visual y facilitar el mantenimiento de estilos. <br> - Se redujo el contenido de las cards, dando una mejor experiencia visual | - Es necesario dedicar más tiempo al diseño responsive, ya que aún no se comporta correctamente en todos los dispositivos. <br> - Considerar el uso de una API en el futuro para automatizar parte del contenido y reducir el trabajo manual. <br> | - Al estar aprendiendo Angular, repetí ciertos errores por falta de experiencia. <br> - La página de géneros presentó muchos inconvenientes técnicos, lo que requirió una gran inversión de tiempo. |


