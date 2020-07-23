import React from 'react';

import HomeComponent from '../HomeComponent/Home.component';
import ProjectComponent from '../ProjectComponent/Project.component';
import BlogComponent from '../BlogComponent/Blog.component';

import { Container } from './Body.styles';

const BodyComponent = props => {
    const { tab } = props;

    const _selectiveRender = () => {
        if(tab === "home") {
            return <HomeComponent/>
        }

        if (tab === "project") {
            return <ProjectComponent/>
        }
        
        if(tab === "blog") {
            return <BlogComponent/>
        }
        
        return null;
    }

    return (
      <Container>
        {_selectiveRender()}
      </Container>
    );
}

export default BodyComponent;