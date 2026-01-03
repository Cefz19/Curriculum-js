import { SkillsData } from "../data/SkillsData";
import { RadialData } from "../data/RadialData";
import SkillCard from "./components/molecules/SkillCard";
import RadialCard from "./components/molecules/RadialCard";

const Skill = () => {
  const view = `
        <section class="skill__container">
                <h1 class="sub-title">My <span>Skills</span></h1>
            <div class="container-technical">

                <div class="tecnologies">

                    <h1 class="heading1">Technical Skills</h1>

                    <div class="technical-bars">
                        ${
                          SkillsData.length > 0
                            ? SkillsData.map((skill) =>
                                SkillCard(
                                  skill.name,
                                  skill.icon,
                                  skill.color,
                                  skill.classes
                                )
                              ).join("")
                            : "<p>No data loaded</p>"
                        }
                        
                    </div>

                </div>


                <div class="container__radial">
                
                    <h1 class="heading1">Professional Skills</h1>

                    <div class="radial">

                        ${
                          RadialData.length > 0
                            ? RadialData.map((radial) =>
                                RadialCard(
                                  radial.x,
                                  radial.y,
                                  radial.viewBox,
                                  radial.cx,
                                  radial.cy,
                                  radial.r,
                                  radial.path,
                                  radial.percetage,
                                  radial.text
                                )
                              ).join("")
                            : "<p>No data loaded</p>"
                        }

                    </div>
                </div>

            </div>
        </section>

    `;
  return view;
};

export default Skill;
