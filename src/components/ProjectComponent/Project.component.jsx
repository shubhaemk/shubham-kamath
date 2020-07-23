import React from "react";

import {
  Container,
  ProjectContainer,
  ProjectCard,
  ActionContainer,
  ActionButton,
} from "./Project.styles";

const ProjectList = [
  {
    id: "1000",
    title: "Compux",
    description: "CLI to generate React Components.",
    demo: "https://www.npmjs.com/package/compux",
    code: "https://github.com/shubhaemk/compux",
  },
  {
    id: "1001",
    title: "React Boilerplate",
    description: "React Boilerplate created from scratch.",
    demo:
      "https://github.com/shubhaemk/another-react-boilerplate#another-react-boilerplate",
    code: "https://github.com/shubhaemk/another-react-boilerplate",
  },
  {
    id: "1002",
    title: "GitCard",
    description: "Generate Sharable GitHub profile cards.",
    demo: "https://shubhaemk.github.io/gitcard/",
    code: "https://github.com/shubhaemk/gitcard",
  },
  {
    id: "1003",
    title: "Code Indent",
    description: "Indents C/Java code.",
    demo: "https://shubhaemk.github.io/code-indent/",
    code: "https://github.com/shubhaemk/code-indent",
  },
  {
    id: "1004",
    title: "Weathrify",
    description: "WIP. Displays weather of Cities.",
    demo: "https://github.com/shubhaemk/weatherify",
    code: "https://github.com/shubhaemk/weatherify",
  },
];

const ProjectComponent = (props) => {
  return (
    <Container>
      <ProjectContainer>
        {ProjectList.map((project) => {
          return (
            <ProjectCard key={project.id}>
              <p>{project.title}</p>
              <p>{project.description}</p>
              <ActionContainer>
                <ActionButton href={project.demo} target="_blank">
                  Demo
                </ActionButton>
                <ActionButton href={project.code} target="_blank">
                  Code
                </ActionButton>
              </ActionContainer>
            </ProjectCard>
          );
        })}
        <ProjectCard>
          <ActionButton
            href="https://github.com/shubhaemk?tab=repositories"
            target="_blank"
          >
            See More
          </ActionButton>
        </ProjectCard>
      </ProjectContainer>
    </Container>
  );
};

export default ProjectComponent;
