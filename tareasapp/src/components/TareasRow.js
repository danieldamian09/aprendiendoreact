import React from 'react';

export const TareasRow = props => (   
        <tr key={props.tarea.name}>
            <td>{props.tarea.name}</td>
            <td>
                <input 
                type="checkbox" 
                checked={props.tarea.hecho} 
                onChange={() => props.toggleTarea(props.tarea)}
                />
            </td>
        </tr>
);