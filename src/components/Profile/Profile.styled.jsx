import styled from "@emotion/styled";
export const Profil = styled.div`
  height: 400px;
  width: 400px;
  background-color: gray;
  padding-top: 50px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;
export const UserName = styled.p`
  font-size: 30px;
  margin-top: 0px;
  margin-bottom: 10px;
`;
export const UserTag = styled.p`
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
  color: #2f2f2f;
`;
export const Location = styled.p`
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
  color: #2f2f2f;
`;
export const UserList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
  justify-content: center;
`;
export const UserListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: white;
`;
export const UserListItemCenter = styled.li`
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;
// <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>
