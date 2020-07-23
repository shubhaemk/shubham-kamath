import styled from 'styled-components';

import { Colors } from '../../constants';

export const Container = styled.header`
    width: 100%;
    height: 15%;

    padding: 1rem 25rem;

    @media (min-width: 1500px){
      padding: 1rem 28rem; 
    }

    @media (min-width: 1900px){
      padding: 2rem 35rem;
    }

    @media (min-width: 2200px){
      padding: 2rem 45rem;
    }

    @media (min-width: 2400px){
      padding: 2rem 55rem;
    }

    @media (min-width: 2500px){
      padding: 2rem 70rem;
    }

    @media (max-width: 1300px) {
        padding: 1rem 22rem;
    }

    @media (max-width: 1225px) {
      padding: 1rem 21rem;
    }
    @media (max-width: 1180px) {
      padding: 1rem 20rem;
    }

    @media (max-width: 1150px) {
      padding: 1rem 15rem;
    }

    @media (max-width: 1055px) {
      padding: 1rem 12rem;
    }

    @media (max-width: 988px) {
      padding: 1rem 7rem;
    }

    @media (max-width: 900px) {
      padding: 1rem 6rem;
    } 
    
    @media (max-width: 860px) {
      padding: 1rem 5rem;
    }

    @media (max-width: 610px) {
      padding: 1rem 7rem;
    }

    @media (max-width: 510px) {
      padding: 1rem 4rem;
    }

    @media (max-width: 500px) {
      padding: 1rem 4rem;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const LogoContainer = styled.div`
  width: 10%;
  height: 100%;

  @media (max-width: 610px) {
      display: none;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > a {
    font-weight: 500;
    font-size: 3rem;
    color: ${Colors.textDark};

    &:link {
      text-decoration: none;
      color: ${Colors.textDark};
    }

    &:visited {
      color: ${Colors.textDark};
    }

    &:hover {
      color: ${Colors.textDark};
    }

    &:active {
      color: ${Colors.textDark};
    }
  }
`;

export const ItemContainer = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 610px) {
      width: 100%;

      align-items: center;
    justify-content: center;
  }

    
`;

export const Item = styled.div`
         width: 8rem;
         height: 5.5rem;
         padding: 0.8rem 0;

         @media (max-width: 430px) {
           width: 6rem;
         }

         @media (max-width: 330px) {
           height: 4.5rem;
         }
       `;

export const ResumeButton = styled.a`
         width: 100%;
         height: 100%;

         background-color: ${Colors.backgroundDark};

         border: 0.1rem solid ${Colors.borderDark};
         border-radius: 0.5rem;

         display: flex;
         justify-content: center;
         align-items: center;

         font-weight: 500;
         font-size: 1.5rem;

         @media (max-width: 430px) {
           font-size: 1.1rem;
         }

         @media (max-width: 330px) {
           font-size: 1rem;
         }

         color: ${Colors.textLight};

         transition: background-color 0.4s;

         &:hover {
           background-color: ${Colors.backgroundLight};
           color: ${Colors.textDark};
         }

         &:link {
           text-decoration: none;
           color: ${Colors.textLight};

           &:hover {
             background-color: ${Colors.backgroundLight};
             color: ${Colors.textDark};
           }
         }

         &:visited {
           color: ${Colors.textLight};

           &:hover {
             background-color: ${Colors.backgroundLight};
             color: ${Colors.textDark};
           }
         }

         &:hover {
           color: ${Colors.textLight};

           &:hover {
             background-color: ${Colors.backgroundLight};
             color: ${Colors.textDark};
           }
         }

         &:active {
           color: ${Colors.textLight};

           &:hover {
             background-color: ${Colors.backgroundLight};
             color: ${Colors.textDark};
           }
         }
       `;

export const TabItem = styled(Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;

  color: ${Colors.textLightGray};
  font-weight: 500;
  font-size: 1.5rem;

  @media (max-width: 430px) {
      font-size: 1.1rem;
  }

  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: ${Colors.textDark};
  }

  & > span {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: inherit;
    font-weight: inherit;
    font-size: inherit;

    & > p {
      color: inherit;
      font-weight: inherit;
      font-size: inherit;
    }
  }
`;


export const SelectedTabItem = styled(TabItem)`
  & > span {
    border: 0.1rem solid ${Colors.borderGray};
    border-radius: 0.5rem;

    & > p {
      color: ${Colors.textDark};
    }
  }
`;


