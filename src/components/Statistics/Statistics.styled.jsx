import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0px;
  margin-bottom: 0px;
`;
const setBgColor = (props) => {
  switch (props.eventType) {
    case ".pdf":
      return "red";
    case ".docx":
      return "blue";
    case ".mp3":
      return "yellow";
    case ".psd":
      return "aqua";
    default:
      return "white";
  }
};
export const StatisticsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  flex-basis: calc(100% / 4);
  background-color: ${setBgColor};
`;
