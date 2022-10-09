import { Profile, Statistics, FriendList, TransactionHistory } from '../';
import { user, data, friends, transactions } from '../../json';
import { Container } from './App.styled';

export const App = () => {
  const {username, tag, location, avatar, stats} = user
  return (
    <Container>
      <Profile 
        username={username} 
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
         />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};