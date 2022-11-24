import { DangerButton, PrimaryButton } from '../helpers/Button/Button';
import './friendsSuggestion.scss';

export default function FriendsSuggestion() {
  const suggestedFriends = [
    {
      img: '/images/friend-1.jpg',
      name: 'john doe',
    },
    {
      img: '/images/friend-2.jpg',
      name: 'jane doe',
    },
  ];
  
  return (
    <div className='friendsSuggestion'>
        <div className='suggestions'>
          <span>suggested friends</span>
          {suggestedFriends.map((suggestedFriend, index) => (
            <div key={index} className='suggestion'>
              <div className='friends'>
                <img src={suggestedFriend.img} alt={suggestedFriend.name} />
                <span>{suggestedFriend.name}</span>
              </div>
              <div className='buttons'>
                <PrimaryButton _class='_btn' onClick={() => null}>follow</PrimaryButton>
                <DangerButton _class='_btn' onClick={() => null}>dismis</DangerButton>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
