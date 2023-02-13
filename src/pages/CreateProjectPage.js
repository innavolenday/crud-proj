import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import classes from './CreateProjectPage.module.css'

function CreateProjectPage () {
    const navigate = useNavigate();

    const nameInputRef = useRef();
    const descInputRef = useRef();
    const ownerInputRef = useRef();
    const ddateInputRef = useRef();

    async function addProject (projectData) {
        const response = await fetch(
            'http://localhost:3500/projects',
            {
                method: 'POST',
                body: JSON.stringify(projectData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
                console.log(response);
                alert('Project created!');
                navigate('/my-projects');

    };

    async function submitHandler(event){
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
        const enteredOwner = ownerInputRef.current.value;
        const enteredDdate = ddateInputRef.current.value;

        const projectData = {
            name: enteredName,
            description: enteredDesc,
            owner: enteredOwner,
            ddate: enteredDdate,
            status: 'ongoing'
        }
        addProject(projectData);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.container}>
            <h1>What are you working on?</h1>
            <div className={classes.control}>
            <label htmlFor='name'>Project Name</label>
            <input type="text" required id='name' ref={nameInputRef} />
            </div>
            <div className={classes.control}>
            <label htmlFor='description'>Project Description</label>
            <textarea required id='description' rows='5' ref={descInputRef}></textarea>
            </div>
            <div className={classes.control}>
            <label htmlFor='owner'>Project Owner</label>
            <input type="text" required id='owner' ref={ownerInputRef} />
            </div>
            <div className={classes.control}>
            <label htmlFor='date'>Due Date</label>
            <input type="date" required id='date' ref={ddateInputRef} />
            </div>
            <div className={classes.btncontainer}>
            <button className={classes.btn}>Add Project</button>
            </div>
            </div> 
            </form>
        
}

export default CreateProjectPage;