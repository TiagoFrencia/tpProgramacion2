import React from 'react'
import ReactDOM from 'react-dom/client'



/* 

import {PrimerComponente} from './holaMundo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente/>
  </React.StrictMode>
) 

*/

/*
import RelojDigital from './relojDigital'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RelojDigital hora={10} minutos={45}/>
  </React.StrictMode>
) */

/*
import ConvertidorTemperatura from './temperaturaCelciusFahrenheit'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConvertidorTemperatura temperatura={32} unidad='C'/>
  </React.StrictMode>
)
*/

/* import ListaUsuarios from './ListaUsuarios'

const usuarios = ['Martin', 'Tiago', 'Leonel'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaUsuarios usuarios={usuarios}/>
  </React.StrictMode>
)*/


/* 
import Producto from './Producto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Producto nombre="Producto Ejemplo" precio="$100" imagenURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"/>
  </React.StrictMode>
)
*/
/* 
import CalculadoraPropina from './CalculadoraPropina'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculadoraPropina total={100} porcentajePropina={15}/>
  </React.StrictMode>
)
*/
/*
import ListaProductos from './ListaProductos'

const productos = [
  { nombre: 'Libro React', precio: '$100', imagenURL: 'https://images.cdn1.buscalibre.com/fit-in/360x360/e7/e9/e7e96546245408ef567fcd9dd6a16b08.jpg' },
  { nombre: 'Celular Xiaomi', precio: '$200', imagenURL: 'data:image/jpeg;base64,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' },

];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaProductos productos={productos}/>
  </React.StrictMode>
)
*/
/*
import ListaTareas from './ListaTareas'

const tareas = [
  { descripcion: 'Lavar Ropa', estado: 'pendiente' },
  { descripcion: 'Acomodar Cuarto', estado: 'completada' },
  
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaTareas tareas={tareas}/>
  </React.StrictMode>
)
*/
/*
import TablaCalificaciones from './TablaCalificaciones'
const estudiantes = [
  { nombre: 'Juan', calificaciones: { matematicas: 50, ciencias: 45, historia: 78 } },
  { nombre: 'Pedro', calificaciones: { matematicas: 92, ciencias: 81, historia: 89 } },
  // Agrega más estudiantes aquí
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TablaCalificaciones estudiantes={estudiantes}/>
  </React.StrictMode>
)
*/

import CarritoCompras from './CarritoCompras'

const productos = [
  { id : 1, nombre: 'Smart Tv', precio: 1000, cantidad: 2 },
  { id : 2, nombre: 'Parlante', precio: 200, cantidad: 3 },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoCompras productos={productos}/>
  </React.StrictMode>
)