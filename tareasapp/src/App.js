import React, { useState, useEffect } from 'react';
import {TareasRow} from './components/TareasRow';
import {TareasBaner} from './components/TareasBaner';
import {TareasCreador} from  './components/TareasCreador';
import {TareasVisibles} from './components/TareasVisibles'


function App() {

  //Definir el estado de la aplicacion
  const [userName, setUserName] = useState('Daniel');
  const [tareasItems, setTareasItems] = useState([
    { name: 'tarea 1', hecho: false },
    { name: 'tarea 2', hecho: false },
    { name: 'tarea 3', hecho: true },
    { name: 'tarea 4', hecho: false }
  ])

  const [mostarCompletado, setMostarCompletado] = useState(true)

  useEffect (() => {

    let data = localStorage.getItem('tareas');
    if (data != null){
      setTareasItems(JSON.parse(data));
    }else{
      setUserName('Humberto Tareas Ejemplo')
      setTareasItems([
        { name: 'tarea 1 ejemplo', hecho: false },
        { name: 'tarea 2 ejemplo', hecho: false },
        { name: 'tarea 3 ejemplo', hecho: true },
        { name: 'tarea 4 ejemplo', hecho: false }
      ])
      setMostarCompletado(true);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem('tareas', JSON.stringify(tareasItems));

  }, [tareasItems]);

  // funcion para agrgar nueva tarea al app desde el input del componente TareasCreador
  const crearNuevaTareaName = tareaNombre => {
    if (!tareasItems.find(t => t.name === tareaNombre)) {
      setTareasItems([...tareasItems, {name: tareaNombre, hecho: false}])
    }
    console.log(tareasItems);
  }

 

    // cambiar el estado de una tarea
  const toggleTarea = tarea => 
    setTareasItems(tareasItems.map(t =>(t.name === tarea.name ? {...t, hecho: !t.hecho} : t)))




  const tareasTablaRows = (tareaValue) => 
    tareasItems
    .filter(tarea => tarea.hecho === tareaValue)
    .map(tarea =>(
      <TareasRow tarea={tarea} key= {tarea.name} toggleTarea= {toggleTarea}/>
    ))
  




  return (
    <div>
      <TareasBaner userName={userName} tareasItems={tareasItems}/>
      <TareasCreador callback={crearNuevaTareaName}/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Descripcion </th>
            <th> hecho </th>
          </tr>
        </thead>
        <tbody>
          {tareasTablaRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text-whit text-center p-2">
        <TareasVisibles
            description= "Completadas"
            ischecked= {mostarCompletado}
            callback= {checked => setMostarCompletado(checked)}
        />

        <div>
            {
            mostarCompletado && (
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Descripcion</th>
                    <th>Hecho</th>
                  </tr>
                </thead>
                <tbody>
                  {tareasTablaRows(true)}
                </tbody>
              </table>
            )
            }
        </div>

      </div>
    </div>
  );
}

export default App;
