import styles from "../styles/Work.module.css";
import WorkProject from "./WorkProject";
import BlogCard from "./BlogCard";
import { projects } from "../Constants/projects";
import { custom_blogs, medium_blogs, dev_to } from "../Constants/blogs";
import { useState, useEffect } from "react";
import { headings, userinfo } from "../Constants/userinfo";
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from "./Experiences";

const Work = ({ currentTheme }) => {
  const [blogList, setBlogList] = useState([]);

  // CUSTOM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR CUSTOM BLOGS
  useEffect(() => {
    setBlogList(custom_blogs);
  }, []);

  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        {projects.map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <WorkProject
                currentTheme={currentTheme}
                project={project}
                id={key}
              />
            </div>
          );
        })}
      </div>
      {userinfo.experience.visible ? (
        <Experiences currentTheme={currentTheme} />
      ) : null}
    </div>
  );
};

export default Work;
