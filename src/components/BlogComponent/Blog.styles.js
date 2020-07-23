import styled from "styled-components";

import { Colors, fadeIn } from "../../constants";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  padding: 6rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${fadeIn} 0.5s linear;

  @media (min-width: 1500px){
      padding: 8rem 0;
    }

    @media (min-width: 1900px){
      padding: 10rem 0;
    }

    @media (min-width: 2200px){
      padding: 10.5rem 0;
    }

    @media (min-width: 2400px){
      padding: 11rem 0;
    }

    @media (min-width: 2500px){
      padding: 11.5rem 0;
    }

    
    @media (max-width: 1300px) {
        padding: 10rem 0rem;
    }

    @media (max-width: 1225px) {
      padding: 11rem 0rem;
    }
    @media (max-width: 1180px) {
      padding: 12rem 0rem;
    }

    @media (max-width: 1150px) {
      padding: 13rem 0rem;
    }

    @media (max-width: 1055px) {
      padding: 14rem 0rem;
    }

    @media (max-width: 988px) {
      padding: 14rem 0rem;
    }

    @media (max-width: 900px) {
      padding: 14rem 0rem;
    } 
    
    @media (max-width: 860px) {
      padding: 14rem 0rem;
    }

    @media (max-width: 850px) {
      padding: 2rem 0rem;
    }

    @media (max-width: 610px) {
      padding: 2rem 0rem;
    }

    @media (max-width: 510px) {
      padding: 2rem 0rem;
    }

    @media (max-width: 500px) {
      padding: 2rem 0rem;
    }
  
`;

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 850px) {
      justify-content: space-between;
      align-items: center;
    }
`;

export const ProjectCard = styled.div`
         width: 30%;
         height: 20rem;

         @media (max-width: 850px) {
           width: 45%;
           height: 17rem;
         }

         @media (max-width: 610px) {
           width: 100%;
           height: 17rem;
           margin-bottom: 2rem;

           &:last-child {
             margin-bottom: 4rem;
           }
         }

         border-radius: 0.5rem;

         display: flex;
         flex-direction: column;
         justify-content: space-between;

         &:nth-child(1) {
           background-color: ${Colors.cardBlue};
         }

         &:nth-child(2) {
           background-color: ${Colors.cardPurple};
         }

         &:nth-child(3) {
           background-color: ${Colors.cardRed};
           justify-content: center;
           align-items: center;

           & > * {
             height: 4rem;
           }
         }

         padding: 2rem 2rem;

         transition: all 0.5s;
         &:hover {
           transform: scale(1.05);
         }

         & > p {
           color: ${Colors.textLight};

           &:nth-child(1) {
             font-size: 2.5rem;
             font-weight: 400;
             @media (max-width: 1300px) {
               font-size: 2.5rem;
             }

             @media (max-width: 1250px) {
               font-size: 2.3rem;
             }

             @media (max-width: 1225px) {
               font-size: 2.3rem;
             }
           }

           &:nth-child(2) {
             font-size: 1.5rem;
             font-weight: 100;

             @media (max-width: 1300px) {
               font-size: 1.4rem;
             }

             @media (max-width: 1225px) {
               font-size: 1.3rem;
             }
           }
         }
       `;

export const ActionContainer = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: flex-end;
`;

export const ActionButton = styled.a`
         min-width: 2rem;
         height: 100%;

         padding: 0 2rem;

         display: flex;
         justify-content: center;
         align-items: center;

         font-size: 1.5rem;

         @media (max-width: 1300px) {
           font-size: 1.4rem;
         }

         @media (max-width: 1225px) {
           font-size: 1.3rem;
         }
         color: ${Colors.textLight};

         border-radius: 0.5rem;

         border: 0.1rem solid ${Colors.borderLight};

         &:hover {
           cursor: pointer;
         }

         &:link {
           text-decoration: none;
           color: ${Colors.textLight};

           &:hover {
             cursor: pointer;
           }
         }

         &:visited {
           text-decoration: none;
           color: ${Colors.textLight};

           &:hover {
             cursor: pointer;
           }
         }

         &:active {
           text-decoration: none;
           color: ${Colors.textLight};

           &:hover {
             cursor: pointer;
           }
         }
       `;
