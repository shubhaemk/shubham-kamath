import React, { useState } from 'react';
import styled from 'styled-components';

import BodyComponent from './components/BodyComponent/Body.component';
import HeaderComponent from './components/HeaderComponent/Header.component';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const TabItems = [
  {
    id: "001",
    title: "Home",
    value: "home",
  },
  {
    id: "002",
    title: "Projects",
    value: "project",
  },
  {
    id: "003",
    title: "Blogs",
    value: "blog",
  }
];

function App() {

  const [tab, setTab] = useState(TabItems[0][`value`]);

  return (
    <Container>
      <HeaderComponent TabItems={TabItems} setTab={setTab} tab={tab} />
      <BodyComponent tab={tab} />
    </Container>
  );
}

export default App;
