import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Link} from "react-router-dom"

export const GoalDetail = () =>{
    const [goal, setGoals] = useState([]);
const {goal_id} = useParams();


useEffect(() => {
        const getData = async () => {
            const url = `https://api.mediehuset.net/sdg/goals/${goal_id}`
            const result = await axios.get(url)
           setGoals(result.data.item)
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [goal_id]);
    
return(
    <>
   <h1>{goal.title}</h1> 
   
    </>
)

}