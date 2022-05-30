import styled from "styled-components";

export const MainPageWrapper = styled.div`
  max-width: 1430px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`