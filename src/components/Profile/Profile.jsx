import PropTypes from "prop-types";
import {
  Profil,
  Description,
  Image,
  UserName,
  UserTag,
  Location,
  UserList,
  UserListItem,
  UserListItemCenter,
} from "components/Profile/Profile.styled";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profil>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <UserName>name :{username}</UserName>
        <UserTag>tag :{tag}</UserTag>
        <Location>location: {location}</Location>
      </Description>

      <UserList>
        <UserListItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </UserListItem>
        <UserListItemCenter>
          <span>Views</span>
          <span>{stats.views}</span>
        </UserListItemCenter>
        <UserListItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </UserListItem>
      </UserList>
    </Profil>
  );
};
Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.number.isRequired),
};
export default Profile;
