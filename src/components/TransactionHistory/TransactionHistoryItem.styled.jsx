import styled from "@emotion/styled";
export const Stroke = styled.tr`
  background-color: white;
  :nth-of-type(3n + 1) {
    background-color: teal;
  }
`;
export const Cell = styled.td`
  padding: 15px;
  text-align: center;
  font-size: 20px;
`;
