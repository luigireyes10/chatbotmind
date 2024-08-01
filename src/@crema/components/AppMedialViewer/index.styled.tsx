import { Modal } from "antd";
import styled from "styled-components";

export const StyledEmbedResponsive = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

    &:before {
        content: "";
        display: block;
        padding-top: 30%;
    }

    & embed,
    & iframe,
    & object,
    & video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`;
export const StyledMediaViewerButton = styled.div`




`;
export const StyledAppMediaModal = styled(Modal)`
    position: relative;
    width: 100vw !important;
    max-width: 80% !important;
    min-height: 100vh !important;
    
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & .ant-modal-content {
        background-color: transparent;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 80vh !important;

    }

    & .ant-modal-body {
        padding: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    & .ant-modal-close {
        color: white;
        border-radius: 50%;
        border: 1px solid rgba(31, 31, 31, 0.096);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }
`;

export const StyledMediaViewer = styled.div`
    position: relative;
    background-color: #ffffff;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const StyledMedialCarousel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;

    & .slick-track {
        display: flex;
        align-items: center;
    }

    & .slick-slide {
        text-align: center;
        position: relative;

        & img {
            max-height: 96vh;
            height: 600px !important;
            object-fit: contain;
        }

        & > * {
            position: relative;
            z-index: 9;
        }
    }

    .slick-prev, .slick-next {
        display: flex !important;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        height: 360px;
        width: 100px;
        z-index: 999;
        box-sizing: border-box;
        border: 1px solid transparent;
        color: #000000;
        
       & span, svg {
        height: 120px !important;
        width: 50px;
       }
    }

    .slick-prev:hover, .slick-next:hover {
       border: 1px solid rgb(0, 0, 0);
    }

    .slick-prev:hover {
        & svg {
        filter: drop-shadow(5px 3px 3px #585858);
       }
    }

    .slick-next:hover {
        & svg {
        filter: drop-shadow(-2px 3px 3px #585858);
       }
    }
    .slick-prev::before, .slick-next::before {
       content: none;
       opacity: 1;
    }

    & .slick-dots {
        bottom: 10px;
    }

    & .slick-dots li button:before,
    & .slick-dots li.slick-active button:before {
        background-color: ${({ theme }) => theme.palette.background.paper};
    }

    & .slick-next {
        right: 0;

        [dir="rtl"] & {
            right: auto;
            left: 0;
        }
    }

    & .slick-prev {
        left: 0;

        [dir="rtl"] & {
            left: auto;
            right: 0;
        }
    }
`;
