"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GrocerEase V1 - Grocery Store Web Application",
    description: "Simple E-commerce Application using VanillaJS and Flask.",
    image: "https://aishme.github.io/portfolio/projects/web/project_1_web.png",
    tag: ["All", "Web", "Capstone"],
    gitUrl: "https://github.com/AishMe/GrocerEase_WebApp",
    previewUrl: "https://drive.google.com/file/d/1uDC5Ub83c5uiirMaylfxSRxQixhsMrLy/view?usp=sharing",
  },
  {
    id: 2,
    title: "GrocerEase V2 - Advanced Grocery Store Application",
    description: "E-commerce Web App with Advanced Features using VueJS and Flask.",
    image: "https://aishme.github.io/portfolio/projects/web/project_2_web.png",
    tag: ["All", "Web", "Capstone"],
    gitUrl: "https://github.com/AishMe/GrocerEase-V2",
    previewUrl: "https://drive.google.com/file/d/1U045JJPvvOH5mtJzt917zYeAs0FVWBBn/view?usp=share_link",
  },
  {
    id: 3,
    title: "Digital Hearing Aid System",
    description: "A Digital Signal Processing Project using Wavelet Filters.",
    image: "https://aishme.github.io/portfolio/projects/capestone_1.png",
    tag: ["All", "Capstone"],
    gitUrl: "https://github.com/AishMe/Digital-Hearing-Aid-System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Language Translator Web App",
    description: "Deep Learning Project using Transformer, english to french.",
    image: "https://aishme.github.io/portfolio/projects/ML_DL/project_4_DL.png",
    tag: ["All", "Capstone", "AI/ML/DL"],
    gitUrl: "https://github.com/AishMe/Language-Translation-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cloud Removal from Raw Satellite Imagary",
    description: "Using a simple GAN model with UNet and Pix2pix",
    image: "https://aishme.github.io/portfolio/projects/ML_DL/project_5_DL.png",
    tag: ["All", "Capstone", "AI/ML/DL"],
    gitUrl: "https://github.com/AishMe/Cloud-Removal-from-Raw-Satellite-Imagery",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Basic ML Projects",
    description: "Short and Basic Machine Learning Projects.",
    image: "https://aishme.github.io/portfolio/projects/ML_DL/project_6_ML.png",
    tag: ["All", "Personal", "AI/ML/DL"],
    gitUrl: "https://github.com/AishMe/Basic-ML-Projects",
    previewUrl: "https://aishme-basic-ml-projects.streamlit.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Capstone"
          isSelected={tag === "Capstone"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML/DL"
          isSelected={tag === "AI/ML/DL"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;