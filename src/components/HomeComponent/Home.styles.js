import styled from 'styled-components';

import { Colors, fadeIn } from "../../constants";

export const Container = styled.section`
         width: 100%;
         height: 100%;

         padding: 6rem 0;

         display: flex;
         align-items: center;
         justify-content: space-between;

         animation: ${fadeIn} 0.5s linear;

         @media (min-width: 1500px) {
           padding: 6.5rem 0;
         }

         @media (min-width: 1900px) {
           padding: 7rem 0;
         }

         @media (min-width: 2200px) {
           padding: 8rem 0;
         }

         @media (min-width: 2400px) {
           padding: 9rem 0;
         }

         @media (min-width: 2500px) {
           padding: 10rem 0;
         }

         @media (max-width: 1200px) {
           padding: 5rem 0;
         }

         @media (max-width: 1000px) {
           padding: 4rem 0;
         }

         @media (max-width: 900px) {
           padding: 2rem 0;
         }

         @media (max-width: 660px) {
           padding: 1.5rem 0;
         }

         @media (max-width: 552px) {
           padding: 1rem 0;
           align-items: center;
           justify-content: center;
           flex-direction: column-reverse;
         }
       `;

export const ImageContainer = styled.div`
         width: 45%;
         height: 100%;
         display: flex;
         align-items: flex-start;
         justify-content: flex-end;

         @media (max-width: 552px) {
           width: 100%;
           height: 45%;
           display: flex;
           align-items: center;
           justify-content: center;
         }

         & > img {
           margin-top: -3rem;
           margin-right: -9.1rem;
           width: 90%;

           border-radius: 50%;

           @media (min-width: 1500px) {
             width: 87%;
           }

           @media (min-width: 1550px) {
             width: 85%;
           }

           @media (min-width: 1600px) {
             width: 83%;
           }

           @media (min-width: 1650px) {
             width: 80%;
           }

           @media (min-width: 1700px) {
             width: 75%;
           }

           @media (min-width: 1750px) {
             width: 70%;
           }

           @media (min-width: 1800px) {
             width: 65%;
           }

           @media (min-width: 1900px) {
             width: 60%;
           }

           @media (min-width: 2200px) {
             width: 55%;
           }

           @media (max-width: 1440px) {
             margin-top: -2rem;
             margin-right: -8.1rem;
             width: 90%;
           }
           @media (max-width: 1340px) {
             margin-top: -1.5rem;
             margin-right: -7.1rem;
             width: 90%;
           }

           @media (max-width: 1200px) {
             margin-top: -1.2rem;
             margin-right: -6.1rem;
             width: 90%;
           }

           @media (max-width: 1000px) {
             margin-top: -1rem;
             margin-right: -5.1rem;
             width: 90%;
           }

           @media (max-width: 900px) {
             margin-top: 0rem;
             margin-right: -2.1rem;
             width: 90%;
           }

           @media (max-width: 660px) {
             margin-top: 2rem;
             margin-right: 0rem;
             width: 90%;
           }

           @media (max-width: 552px) {
             margin-top: 0rem;
             margin-right: 0rem;
             width: 60%;
           }
         }
       `;

export const WelcomeTextContainer = styled.div`
         width: 55%;
         height: 100%;

         padding-top: 9.5rem;

         @media (max-width: 1200px) {
           padding-top: 9.2rem;
         }

         @media (max-width: 1000px) {
           padding-top: 9rem;
         }

         @media (max-width: 860px) {
           padding-top: 8rem;
         }

         @media (max-width: 790px) {
           padding-top: 7rem;
         }

         @media (max-width: 700px) {
           padding-top: 6.5rem;
         }

         @media (max-width: 660px) {
           padding-top: 6rem;
         }

         @media (max-width: 552px) {
           padding-top: 4rem;
           width: 100%;
           height: 60%;
         }

         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-start;

         & > p {
           color: ${Colors.textDark};

           &:nth-child(1) {
             font-size: 10rem;

             @media (max-width: 1440px) {
               font-size: 9.7rem;
             }

             @media (max-width: 1360px) {
               font-size: 9.5rem;
             }

             @media (max-width: 1200px) {
               font-size: 9.2rem;
             }

             @media (max-width: 1000px) {
               font-size: 9rem;
             }

             @media (max-width: 860px) {
               font-size: 8.6rem;
             }

             @media (max-width: 790px) {
               font-size: 8.2rem;
             }

             @media (max-width: 700px) {
               font-size: 7rem;
             }

             @media (max-width: 610px) {
               font-size: 6.5rem;
             }

             @media (max-width: 660px) {
               font-size: 6rem;
             }

             @media (max-width: 360px) {
               font-size: 4rem;
             }

             font-weight: 700;

             background-image: linear-gradient(
               -70deg,
               #00ade4,
               #00bed6,
               #00dfd8,
               #00bed6,
               #00ade4
             );
             background-size: 200% auto;

             background-clip: text;
             text-fill-color: transparent;
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;

             animation: shine 3s linear infinite;

             @keyframes shine {
               to {
                 background-position: 200% center;
               }
             }
           }

           &:nth-child(2) {
             font-size: 5rem;

             @media (max-width: 1440px) {
               font-size: 4.5rem;
             }

             @media (max-width: 1360px) {
               font-size: 4.2rem;
             }

             @media (max-width: 1200px) {
               font-size: 4rem;
             }

             @media (max-width: 870px) {
               font-size: 3.6rem;
             }

             @media (max-width: 790px) {
               font-size: 3.2rem;
             }

             @media (max-width: 700px) {
               font-size: 3rem;
             }

             @media (max-width: 660px) {
               font-size: 2.6rem;
             }

             @media (max-width: 610px) {
               font-size: 2.2rem;
             }

             @media (max-width: 552px) {
               font-size: 3.8rem;
             }

             @media (max-width: 475px) {
               font-size: 3.4rem;
             }

             @media (max-width: 430px) {
               font-size: 3.2rem;
             }

             @media (max-width: 415px) {
               font-size: 3rem;
             }

             @media (max-width: 390px) {
               font-size: 2.9rem;
             }

             @media (max-width: 370px) {
               font-size: 2.7rem;
             }

             @media (max-width: 360px) {
               font-size: 2.3rem;
             }
           }

           &:nth-child(3) {
             color: ${Colors.textLightGray};
             font-weight: 100;
             margin-top: 0.5rem;
             font-size: 2.17rem;

             @media (max-width: 1480px) {
               font-size: 2rem;
             }

             @media (max-width: 1360px) {
               font-size: 1.9rem;
             }

             @media (max-width: 1310px) {
               font-size: 1.85rem;
             }

             @media (max-width: 1220px) {
               font-size: 1.75rem;
             }

             @media (max-width: 870px) {
               font-size: 1.6rem;
             }

             @media (max-width: 790px) {
               font-size: 1.4rem;
             }
             @media (max-width: 700px) {
               font-size: 1.2rem;
             }

             @media (max-width: 610px) {
               font-size: 1rem;
             }

             @media (max-width: 560px) {
               font-size: 0.9rem;
             }

             @media (max-width: 552px) {
               font-size: 1.6rem;
             }
             @media (max-width: 455px) {
               font-size: 1.45rem;
             }

             @media (max-width: 420px) {
               font-size: 1.35rem;
             }

             @media (max-width: 400px) {
               font-size: 1.3rem;
             }

             @media (max-width: 390px) {
               font-size: 1.2rem;
             }

             @media (max-width: 360px) {
               font-size: 1rem;
             }
           }
         }
       `;

export const SocialContainer = styled.div`
         width: 100%;
         height: 3.5rem;
         margin-top: 2rem;

         display: flex;
         justify-content: flex-start;

         @media (max-width: 1220px) {
           height: 3.4rem;
         }

         @media (max-width: 870px) {
           height: 3.3rem;
         }

         @media (max-width: 790px) {
           height: 3.2rem;
         }
         @media (max-width: 700px) {
           height: 3.1rem;
         }
         @media (max-width: 660px) {
           height: 2.6rem;
         }

         @media (max-width: 552px) {
           height: 3.4rem;
         }

         @media (max-width: 360px) {
           height: 2.7rem;
         }
       `;

export const SocialButton = styled.a`
  min-width: 2rem;
  height: 100%;

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  @media (max-width: 1220px) {
    font-size: 1.4rem;
  }

  @media (max-width: 870px) {
    font-size: 1.2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 790px) {
    font-size: 1rem;
    padding: 0 1.2rem;
  }

  @media (max-width: 660px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  @media (max-width: 552px) {
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1.1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
  

  
  color: ${Colors.textLightGray};

  background-color  ${Colors.backgroundLight};

  transition: background-color 0.4s;

  &:not(:last-child){
    margin-right: 2rem;
  }

  border: 0.1rem solid ${Colors.borderGray};
  border-radius: 0.5rem;  

  &:hover {
      background-color: ${Colors.backgroundLightGray};
      color: ${Colors.textLight};
      cursor: pointer;
  }

  &:link {
        text-decoration: none;
        color: ${Colors.textLightGray};

        &:hover {
            background-color: ${Colors.backgroundLightGray};
            color: ${Colors.textLight};
            cursor: pointer;
        }
    }

    &:visited {
        text-decoration: none;
        color: ${Colors.textLightGray};

        &:hover {
            background-color: ${Colors.backgroundLightGray};
            color: ${Colors.textLight};
            cursor: pointer;
        }
    }


    &:active {
        text-decoration: none;
        color: ${Colors.textLightGray};

        &:hover {
            background-color: ${Colors.backgroundLightGray};
            color: ${Colors.textLight};
            cursor: pointer;
        }
    }
`;