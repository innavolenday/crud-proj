import { useNavigate } from 'react-router-dom';
import classes from './ProjectItem.module.css';

function ProjectItem (props){
    const navigate = useNavigate();


    async function completeProjectButton () {
        const projectData = {
            "id": props.id,
            "name": props.name,
            "description": props.description,
            "owner": props.owner,
            "ddate": props.ddate,
            "status": "completed"
        }
        const response = await fetch(
            'http://localhost:3500/projects',
            {
                method: 'PUT',
                body: JSON.stringify(projectData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
        console.log(response)
        window.location.reload(false);
    };

    async function editProjectButton () {
        console.log('button')
        console.log(props.id)
        navigate(`${props.id}`)
    };

    async function deleteProjectButton () {
        const projectData = {
            "id": props.id
        }
        const response = await fetch(
            'http://localhost:3500/projects',
            {
                method: 'DELETE',
                body: JSON.stringify(projectData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
        console.log(response)
        window.location.reload(false);
    };

    return (
    <li className={classes.item}>
        <div className={classes.content}>
            <h2>{props.name}</h2>
            <hr></hr>
            <p className={classes.heading}>Description:</p><p>{props.description}</p>
            <p className={classes.heading}>Project Owner:</p> <p>{props.owner}</p>
            <p className={classes.heading}>Status:</p> <p>{props.status}</p>
            <p className={classes.heading}>Due Date:</p> <p>{props.ddate}</p>
        </div>
        <div className={classes.flex}>
        {props.status !== 'completed' ? <div className={classes.actions}><button onClick={completeProjectButton}>Mark Completed</button> </div> : null}
        {props.status !== 'completed' ? <div className={classes.actions}><button onClick={editProjectButton}>Edit Details</button> </div> : null}
        <div className={classes.actions}>
            <button onClick={deleteProjectButton}>Delete Project</button>
        </div>
        </div>
    </li>
    )
};

export default ProjectItem;