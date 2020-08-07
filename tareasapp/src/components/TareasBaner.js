import React from 'react';

export const TareasBaner = props => (
    <h4 className="bg-primary text-white text center p-4">
        {props.userName} Tareas App ({props.tareasItems.filter(t => !t.hecho).length} tareas por hacer)
    </h4>
)