import { ProjectsData } from "../data/moleculesData/ProjectData";
import ProjectsCard from "./components/molecules/ProjectsCard";

const Projects = () => {
  const view = `

    <div class="content__text">
    
        <div class="text__container">
            <h2>Portfolio<span>Projects</span></h2>
        </div>
        
        <div class="portfolio__content">

            
                ${
                  ProjectsData.length > 0
                    ? ProjectsData.map((service) =>
                        ProjectsCard(
                          service.src,
                          service.atl,
                          service.title,
                          service.description,
                          service.icon
                        )
                      ).join("")
                    : "<p>No data loaded</p>"
                }

        </div>
    </div>
    `;
  return view;
};

export default Projects;
