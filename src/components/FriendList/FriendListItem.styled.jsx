import styled from "@emotion/styled";

export const FriendCardItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  background-color: white;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0px;
  }
`;
export const ActiveFriend = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;

  border-radius: 50%;
  background-color: green;
`;
export const DisableFriend = styled.span`
  width: 20px;
  margin-right: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;
