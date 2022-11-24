import './onlineFriends.scss';

export default function OnlineFriends() {
  const onlineFriends = [
    {
      img: '/images/friend-1.jpg',
      name: 'john doe',
    },
    {
      img: '/images/friend-2.jpg',
      name: 'jane doe',
    },
    {
      img: '/images/friend-2.jpg',
      name: 'jane doe',
    },
    {
      img: '/images/friend-1.jpg',
      name: 'jane doe',
    },
  ];

  return (
    <div className="onlineFriends">
        <div className="container">
            <span>online friends</span>
            {onlineFriends.map((onlineFriend, index) => (
            <div key={index} className="onlineFriend">
                <img src={onlineFriend.img} alt={onlineFriend.name} />
                <div className='onlineBullet' />
                <span>{onlineFriend.name}</span>
            </div>
            ))}
        </div>
    </div>
  )
}
