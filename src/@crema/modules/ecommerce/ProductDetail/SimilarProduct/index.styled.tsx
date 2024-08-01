import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledSimilarProductSlideView = styled.div`
  position: relative;
  padding-bottom: 25px;

  & .slick-prev,
  & .slick-next {
    display: inline-block;
  }

  & .slick-slide {
    cursor: pointer;

    & .ant-card {
      margin: 8px;
      border: 0 none;
      overflow: hidden;
    }

    & .ant-card-body {
      padding: 20px;
    }
  }
`;
