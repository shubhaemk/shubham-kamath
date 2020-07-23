import React from "react";

import {
  Container,
  ImageContainer,
  WelcomeTextContainer,
  SocialContainer,
  SocialButton,
} from "./Home.styles";
import ProfilePicture from '../../assets/profile.jpeg';

const SocialLink = [
  {
    id: "0000001",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/shubham-kamath/",
  },
  {
    id: "0000002",
    title: "GitHub",
    link: "https://github.com/shubhaemk",
  },
  {
    id: "0000003",
    title: "Twitter",
    link: "https://twitter.com/shubham_kamath",
  },
  {
    id: "0000004",
    title: "Instagram",
    link: "https://www.instagram.com/shubham_kamath/",
  },
];

const HomeComponent = (props) => {

    return (
      <Container>
        <WelcomeTextContainer>
          <p>Hi!</p>
          <p> I'm Shubham Kamath.</p>
          <p>Software Engineer and a passionate Photographer</p>
          <SocialContainer>
            {SocialLink.map((SocialMedia) => (
              <SocialButton
                key={SocialMedia.id}
                href={SocialMedia.link}
                target="_blank"
              >
                {SocialMedia.title}
              </SocialButton>
            ))}
          </SocialContainer>
        </WelcomeTextContainer>
        <ImageContainer>
          <img src={ProfilePicture} alt="Profile" />
        </ImageContainer>
      </Container>
    );
};

export default HomeComponent;
