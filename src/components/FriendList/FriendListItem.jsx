import PropTypes from "prop-types";
import {
  FriendCardItem,
  ActiveFriend,
  DisableFriend,
} from "components/FriendList/FriendListItem.styled";
const FriendListItem = ({ friends }) => {
  return friends.map((friend) => {
    return (
      <FriendCardItem key={friend.id}>
        {friend.isOnline ? (
          <ActiveFriend></ActiveFriend>
        ) : (
          <DisableFriend></DisableFriend>
        )}
        <img src={friend.avatar} alt="User avatar" width="48" />
        <p>{friend.name} </p>
      </FriendCardItem>
    );
  });
};
FriendListItem.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default FriendListItem;
