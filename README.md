# YourStream

**Desarrollado por:** Jalil Samas Mendoza Reyes

## 1. Resumen
Esta página es una simulación de un servicio de streaming llamada YourStream.  
Cuenta con un diseño sencillo pero intuitivo para los usuarios.

## 2. Requerimientos técnicos
- Tecnologías utilizadas: HTML, JavaScript y Bootstrap
- CSS: No se utilizó en esta versión inicial

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

Haz doble clic en index.html (se abrirá en tu navegador predeterminado)

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

**# 6. Sprint Review**  

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien? |
|------------------|-----------------------------|---------------------|
| - Se logró crear un diseño sencillo y fácil de usar para el usuario final, permitiendo navegar entre páginas hacia las categorías deseadas. <br> - Se redujeron horas de trabajo gracias al enfoque de diseño y el uso de Bootstrap. <br> - Los botones permiten ver más/menos contenido en las *cards*, así como eliminar una *card* específica. | - Mejorar habilidades con CSS (experimentar en el siguiente sprint). <br> - Automatizar la creación de *cards* para reducir trabajo manual. <br> - Rediseñar la página de inicio de sesión para mejorar su aspecto visual. | - El diseño *responsive* no funciona en todos los tamaños de pantalla, a pesar de usar Bootstrap. <br> - Si no hay suficiente contenido en el *body*, el *footer* se contrae hacia el *navbar*. <br> - La página de género quedó poco elaborada (solo se usaron `<hr>` y agrupaciones básicas de películas). |


