import React from "react";
import BasicTable from './tableTasks';
import SimpleContainer from './Description';

export default function ListTasks() {
    return (
        <div className="listTasks">
            <h1 style={{color:'#6aa7aa', textAlign:'center'}}>Listes des tâches</h1>
            <BasicTable />
            <SimpleContainer />
        </div>
    )
}