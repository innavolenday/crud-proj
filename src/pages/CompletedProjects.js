import { useState, useEffect } from "react";
import MyProjectList from '../components/projects/ProjectList';

function CompletedProjects () {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://localhost:3500/projects/completed'
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setIsLoading(false);
            setLoadedProjects(data);
        });
    }, []);

        if (isLoading) {
            return <section>
                <p>Loading...</p>
            </section>
        }  return (
            <section>
                <MyProjectList projects={loadedProjects} />
            </section>
        );
};

export default CompletedProjects;