import React, { useState } from 'react';
import {TareasRow} from './components/TareasRow';
import {TareasBaner} from './components/TareasBaner';


function App() {

  //Definir el estado de la aplicacion
  const [userName, setUserName] = useState('Daniel');
  const [tareasItems, setTareasItems] = useState([
    { name: 'tarea 1', hecho: false },
    { name: 'tarea 2', hecho: false },
    { name: 'tarea 3', hecho: true },
    { name: 'tarea 4', hecho: false }
  ])

    // cambiar el estado de una tarea
  const toggleTarea = tarea => 
    setTareasItems(tareasItems.map(t =>(t.name === tarea.name ? {...t, hecho: !t.hecho} : t)))




  const tareasTablaRows = () => 
    tareasItems.map(tarea =>(
      <TareasRow tarea={tarea} key= {tarea.name} toggleTarea= {toggleTarea}/>
    ))
  




  return (
    <div>
      <TareasBaner userName={userName} tareasItems={tareasItems}/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Descripcion </th>
            <th> hecho </th>
          </tr>
        </thead>
        <tbody>
          {tareasTablaRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
