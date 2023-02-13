import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

function ProjectList (props){
    return (
        <ul className={classes.list}>
            {props.projects.map((project) => (
            <ProjectItem 
                key={project._id} 
                id={project._id}
                name={project.name}
                description={project.description}
                owner={project.owner}
                ddate={project.ddate}
                status={project.status}
                />
                ))}
        </ul>
    );
};

export default ProjectList;