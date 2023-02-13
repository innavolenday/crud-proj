import { Link,useNavigate,useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import classes from './EditProjectPage.module.css'

function EditProjectPage (props){
    const { projid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState([]);
    const nameInputRef = useRef();
    const descInputRef = useRef();
    const ownerInputRef = useRef();
    const ddateInputRef = useRef();
    const navigate = useNavigate();


    async function saveChanges(event){
        event.preventDefault();
        const projectData = {
            "id": projid,
            "name": nameInputRef.current.value,
            "description": descInputRef.current.value,
            "owner": ownerInputRef.current.value,
            "ddate": ddateInputRef.current.value,
            "status": "ongoing"
        }
        console.log(projectData)
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
        navigate('/my-projects')

    }

    useEffect(() => {
        fetch(`http://localhost:3500/projects/${projid}`)
        .then((response) => {
            console.log('response')
            return response.json();
        })
        .then((data) => {
            setIsLoading(false);   
            setLoadedProjects(data);
        });
    }, [projid]);
    console.log('here')
    console.log(loadedProjects)
    console.log('eme')

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>

    } return (             
        <form className={classes.form}>
            <div className={classes.container}>
                <h1>Edit Project Details</h1>
                <div className={classes.control}>
                    <label htmlFor='name'>Project Name</label>
                    <input type="text" required id='name' defaultValue={loadedProjects[0].name} ref={nameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Project Description</label>
                    <textarea required id='description' rows='5' defaultValue={loadedProjects[0].description} ref={descInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='owner'>Project Owner</label>
                    <input type="text" required id='owner' defaultValue={loadedProjects[0].owner} ref={ownerInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Due Date</label>
                    <input type="date" required id='date' defaultValue={loadedProjects[0].ddate} ref={ddateInputRef} />
                </div>
                <div className={classes.btncontainer}>
                    <div>
                        <button className={classes.btn} onClick={saveChanges}>Save Changes</button>
                    </div>
                    <div>
                        <Link to='/my-projects'><button className={classes.btn}>Cancel</button></Link>
                    </div>
                </div>
            </div> 
            </form>
    )
}

export default EditProjectPage;