import FriendsSuggestion from '../friendsSuggestion/FriendsSuggestion';
import LastActivities from '../lastActivities/LastActivities';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import './rightBar.scss';

export default function RightBar() {
  return (
    <div className='rightBar'>
      <FriendsSuggestion />
      <LastActivities />
      <OnlineFriends />
    </div>
  )
}
