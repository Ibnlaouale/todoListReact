import React from "react";
import Form from "./Form";

import PieChart from "./Mychart";

export default function Addtask() {

    return (
        <div className="divAddTask">
            <div style={{ color: '#6aa7aa', textAlign: 'center', backgroundColor: '#6aa7aa', padding:'2%'}}>
                <h2 style={{color:'#ffff',margin:'0'}}>Ajouter une tâche</h2>
            </div>
            <Form />
            <div>
                <PieChart />
            </div>
        </div>
    )
}