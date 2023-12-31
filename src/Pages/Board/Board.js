import Lane from '../../Components/Lane';
import './Board.css';
import useDataFetching from '../../hooks/useDataFetching';
import { useEffect, useState } from 'react';


const lanes = [
    { id: 1, title: 'Applied' },
    { id: 2, title: 'Rejected' },
    { id: 3, title: 'Interviewed' },
    { id: 4, title: 'Hired' },
];

function onDragStart(e,id){
    e.dataTransfer.setData('id', id);
}
function onDragOver(e){
    e.preventDefault();
};

function Board(){
    const [loading, error, data] = useDataFetching('http://localhost:5000/tasks');
    const [tasks, setTasks] = useState([]);
    useEffect(() =>{
        setTasks(data);
    }, [data]);
    function onDrop(e, laneId){
        const id = e.dataTransfer.getData('id');
        const updatedTasks = tasks.filter((task) =>{
            if(task.id.toString() === id){
                task.lane = laneId;
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return(
        <div className='Board-wrapper'>
            {lanes.map((lane) => (
                <Lane 
                key={lane.id} laneId={lane.id} title={lane.title} 
                loading ={loading} error = {error}
                tasks ={tasks.filter((task) => task.lane === lane.id)} 
                onDragStart={onDragStart} onDragOver={onDragOver}
                onDrop={onDrop}/>
            ))}
        </div>
    );
}

export default Board;