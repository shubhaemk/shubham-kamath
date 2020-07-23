import React from 'react';

import {
  Container,
  HeaderContainer,
  LogoContainer,
  ItemContainer,
  Item,
  ResumeButton,
  TabItem,
  SelectedTabItem
} from "./Header.styles";

import ResumePath from '../../resume/resume.pdf';


const HeaderComponent = props => {
    const { TabItems, setTab, tab } = props;

    return (
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <a aria-current="page" aria-label="go to homepage" href="/">
              SK
            </a>
          </LogoContainer>
          <ItemContainer>
              {
                  TabItems.map(item => {
                    if(item.value === tab){
                      return (
                        <SelectedTabItem
                          key={item.id}
                        >
                          <span>
                            <p>{item.title}</p>
                          </span>
                        </SelectedTabItem>
                      );
                    }

                    return (
                      <TabItem key={item.id} onClick={() => setTab(item.value)}>
                        <span>
                          <p>{item.title}</p>
                        </span>
                      </TabItem>
                    );
                  })
              }
            <Item>
              <ResumeButton href={ResumePath} download="Shubham_Kamath.pdf">
                Resume
              </ResumeButton>
            </Item>
          </ItemContainer>
        </HeaderContainer>
      </Container>
    );
}

export default HeaderComponent;