import { useEffect, useState } from "react";
import Task from "../../Components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching";
import './Backlog.css';
import Lane from "../../Components/Lane";

function onDragStart(e,id){
    e.dataTransfer.setData('id', id);
}
function onDragOver(e){
    e.preventDefault();
};

const lanes = [
    { id: 5, title: 'Backlog'},
];

function Backlog() {
    const [loading, error, data] = useDataFetching('http://localhost:5000/tasks');
    const[tasks, setTasks] = useState([]);
    useEffect(()=>{
        setTasks(data);
    },[data])

    function onDrop(e, laneId){
        const id= e.dataTransfer.getData('id');
        const updatedTasks = tasks.filter((task) =>{
            if(task.id.toString() === id){
                task.lane = laneId;
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <div className="Backlog-wrapper">
            <div className="Tasks-wrapper">
            {lanes.map((lane) => (
                <Lane 
                key={lane.id} laneId={lane.id} title={lane.title} 
                loading ={loading} error = {error}
                tasks ={tasks.filter((task) => task.lane === lane.id)} 
                onDragStart={onDragStart} onDragOver={onDragOver}
                onDrop={onDrop}/>
            ))}
            </div>
        </div>

    );
}

export default Backlog;
