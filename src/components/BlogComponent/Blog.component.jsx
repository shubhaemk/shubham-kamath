import React from "react";

import {
  Container,
  ProjectContainer,
  ProjectCard,
  ActionContainer,
  ActionButton,
} from "./Blog.styles";

const BlogList = [
  {
    id: "2000",
    title: "Recoil",
    description: "New state management library from Facebook.",
    read:
      "https://dev.to/shubhamk/recoil-facebook-s-own-state-management-library-26pb",
  },
  {
    id: "2001",
    title: "Recoil - Async",
    description: "Asynchronous way of Recoil.",
    read:
      "https://dev.to/shubhamk/recoil-the-asynchronous-way-to-manage-state-part-1-18kk",
  },
];

const BlogComponent = (props) => {
  return (
    <Container>
      <ProjectContainer>
        {BlogList.map((blog) => {
          return (
            <ProjectCard key={blog.id}>
              <p>{blog.title}</p>
              <p>{blog.description}</p>
              <ActionContainer>
                <ActionButton href={blog.read} target="_blank">
                  Read
                </ActionButton>
              </ActionContainer>
            </ProjectCard>
          );
        })}
        <ProjectCard>
          <ActionButton href="https://dev.to/shubhamk" target="_blank">
            See More
          </ActionButton>
        </ProjectCard>
      </ProjectContainer>
    </Container>
  );
};

export default BlogComponent;
