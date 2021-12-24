import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";

import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import { SectionStatics } from "components/App/App.styled";
export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <SectionStatics>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </SectionStatics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
