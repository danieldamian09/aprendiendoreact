import React, { useState } from 'react';

export const TareasCreador = props => {
    // definir un estado que vamos a estar alterando utlizamos el useState

    const [nuevaTareaNombre, setNuevaTareaNombre] = useState('');

    // funcion para cambiar el estado del input cuando el usuario escriba algo metodo onchance

    const agregarValorNuevaTarea = e => setNuevaTareaNombre (e.target.value);

    // funcion para agrgar la nueva tarea al estado de la app cuando el usuario utilice el boton agrgar

    const crearNuevaTarea = () => {
        props.callback(nuevaTareaNombre)
        // console.log(nuevaTareaNombre);
        setNuevaTareaNombre(' ');
    }

    return(
        <div className="my-1">
            <input 
            type="text"
            className="form-control"
            value={nuevaTareaNombre}
            onChange={agregarValorNuevaTarea}
            />
            <button className="btn btn-primary mt-1" onClick={crearNuevaTarea}>
                Agrgar
            </button>
        </div>
    )
}