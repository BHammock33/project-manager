import Lane from '../../Components/Lane';
import './Board.css';
import { useState, useEffect } from 'react';

const lanes = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Review' },
    { id: 4, title: 'Done' },
];


function Board(){
const [loading, setLoading] = useState(false);
const [tasks, setTasks] = useState([]);
const [error, setError] = useState("");
useEffect(() =>{
    async function fetchData(){
        try{
            const tasks = await fetch(
                `https://github.com/BHammock33/project-manager/blob/master/db.json/tasks`,
            );
            const res = await tasks.json();
            if(res){
                setTasks(res);
                setLoading(false);
            }
        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }
    fetchData();
},[]);
    return(
        <div className='Board-wrapper'>
            {lanes.map((lane) => (
                <Lane key={lane.id} title={lane.title} loading ={loading} error = {error} tasks ={tasks.filter((task) => tasks.lane === lane.id)} />
            ))}
        </div>
    );
}

export default Board;