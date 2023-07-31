# Desarrollo de una Aplicación de Lista de Libros

# Funcionalidad

1. **Visualización de Libros Disponibles**: La aplicación debe muestra una lista de libros disponibles que el usuario pueda seleccionar.

2. **Creación de Lista de Lectura**: El usuario puede crear una lista de lectura a partir de los libros disponibles. En la UI muestra qué libros están en la lista de lectura y cuáles no. Es posible mover un libro de la lista de lectura a la lista de disponibles.

3. **Filtrado de Libros por Género**: Los usuarios pueden filtrar la lista de libros disponibles por género, y se muestra un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

4. **Sincronización de Estado**: Sincronización de un estado global que refleja el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos se actualiza en consecuencia.

5. **Persistencia de Datos**: La aplicación tiene persistencia de datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura se mantiene.

6. **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña se reflejan en la otra. Sin necesidad de usar Backend.

7. **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

# App desarrollada con React usando los Hooks useState, useEffect, customHook, useId y useReducer.
