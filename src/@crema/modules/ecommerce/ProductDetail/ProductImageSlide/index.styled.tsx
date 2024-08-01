import styled from "styled-components";

export const StyledProductImageSlide = styled.div`
    position: relative;
`;


export const StyledArticle = styled.article`



    width: auto;

   

`;

export const StyledContentCompartir = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 0;
border-radius: 40px;

cursor: pointer;
h3 {
    font-size: 15px;
    padding-right: 10px;
    margin-top: 5px;
    
    
}


`

export const StyledContetnFavorite = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 0;
border-radius: 40px;

cursor: pointer;
h3 {
    font-size: 15px;
    padding-right: 10px;
    margin-top: 5px;
    
    
}


`



export const StyledProductImageSlideIcons = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
 
    flex-direction: column;

    


    & div {
      height: 150px;
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      display: flex;
      
      

        & p {
            color: #000;

            font-family: Open Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }

        & span {
            color: #00a3e1;
            font-family: Open Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }
`;
export const StyledDots =  styled.div`


`

export const StyledProductImageSlideIcon = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: 18px;
    height: 80px;
    margin-top: -10px;

    & span {
      cursor: pointer;
      padding: 10px;
      border-radius: 20px;
      background-color: #f2f2f2;
    }
`;


export const StyledProductImageSlideRoot = styled.div`
    position: relative;
    display: flex;
    & article {
        max-width: 500px;
        display: flex;
        width: calc(100% - 60px);
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & .BrainhubCarousel__container {
            height: 100%;
        }
    }
    & .BrainhubCarousel__container {
        margin-left: 10px;
        border-radius: 10px;

        [dir="rtl"] & {
            margin-left: 0;
            margin-right: 10px;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
            margin-bottom: 20px;
        }

        & .BrainhubCarousel {
            height: 100%;
        }
    }

    & .BrainhubCarousel__dots {
        flex-direction: column;
        
        

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
            display: none;
        }

        & .BrainhubCarousel__thumbnail {
            opacity: 1;
            background-color: transparent;
            border-radius: 10px;
            margin-bottom: 10px;
            border: 1px solid ${({ theme }) => theme.palette.borderColor};

            &.BrainhubCarousel__thumbnail--selected {
                border: solid 2px ${({ theme }) => theme.palette.gray[600]};
            }
        }

        & img {
            height: 60px;
        }
    }
`;


export const StyledProductImageLike = styled.section`
    cursor: pointer;
    padding: 0;
    border: none;

    background-color: #f2f2f2;
    display: flex;
    border-radius: 20px;
    gap: 20px;
    [dir="rtl"] & {
        right: auto;
        left: 10px;
    }
`;

export const StyledProductFav = styled.section`


display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 0;
border-radius: 40px;
background-color: #f2f2f2;

cursor: pointer;
h3 {
    font-size: 15px;
    padding-right: 10px;
    margin-top: 5px;
    
    
}


    /* [dir="rtl"] & {
        right: auto;
        left: 10px;
    } */
`;

export const StyledProductImageSlideAction = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        padding-left: 20px;

        [dir="rtl"] & {
            padding-left: 0;
            padding-right: 20px;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
        padding-left: 60px;

        [dir="rtl"] & {
            padding-left: 0;
            padding-right: 60px;
        }
    }
`;
