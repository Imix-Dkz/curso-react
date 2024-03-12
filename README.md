<<<<<<< HEAD
# Curso REACT Express
* VIDEO: [Aprende React en 45 Minutos](https://www.youtube.com/watch?v=PWF5SgnNdp4)
* Del Canal: deivchoi

## React + Vite
- **React:** React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página
- **Vite:** Vite es un constructor de JS, Vite toma tu código de React-JSX y lo transforma en archivos HTML, CSS, y JS, que pueden se ejecutados por la mayoria de navegadores web

### Estructura general de un proyecto REACT
Archivos JSX( por ejemplo main.JSX ), hacen referencia a JavaScript-XML
Por lo general, un componente parte de 2 archivos principales:
- App.jsx(funcionalidad)
- App.css(Diseño)
Con los que se pueden ir generando modulos de código o funcionalidades que permitan la operabilidad del sitio web...

Cuando se crea un componente y se requiere gestionar propiedades en el, al mandarlos por una función se usa la convención "props", por ejemplo...
      function Card(**props**){
      return ( <ELEMENTO clasName="Card">
         <h2>Titulo de la Tarjeta</h2>
         <p>Descripción de la Tarjeta</p>
      </ELEMENTO>);
      }

En script de "App.jsx", se puede ver el uso de componentes dinamicos desde un arreglo de datos...
      const vehiclesList = vehicles.map( v => {
          return <Card title={v.name} description={v.description} />
      })

En el script "ShowHide.jsx" se puede ver el uso de eventos y control de estados

Para el control de rutas del proyecto y evitar proceso de recarga de pagina al momento de invocar componentes, se usará la libreria de "reactrouter.com", se instala de la siguiente manera...
    npm install react-router-dom

Se añaden ejemplos de enrutamiento dinamico en el script "main.jsx"
Se incluyen redirección de página principal y se corrigen algunos links de imagenes que se habian roto...

---------------------------------------------------------------------------------------------
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

>>>>>>> 3a890d1cd082763c4722055e4c35be19b788cc99
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Curso React
