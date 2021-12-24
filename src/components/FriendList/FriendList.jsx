import PropTypes from "prop-types";
import FriendListItem from "components/FriendList/FriendListItem";
import { ListFriends } from "components/FriendList/FriendList.styled";
const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      <FriendListItem friends={friends}></FriendListItem>
    </ListFriends>
  );
};
FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default FriendList;
