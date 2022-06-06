import React from 'react'
import './Projects.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="section-container">
        <Header heading="My Projects." details="Passionate about building products & side Projects"/>

        <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>

        <Footer phrase="Go to " link="Products" toAddress='/products'/>

  </div>
    )
}

export default Projects