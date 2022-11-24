import './lastActivities.scss';

export default function LastActivities() {
  const lastActivies = [
    {
      userImage: '/images/friend-1.jpg',
      user: 'john doe',
      activity: 'change his profile picture',
      minutes: 2,
    },
    {
      userImage: '/images/friend-2.jpg',
      user: 'jane doe',
      activity: 'comment your last photo',
      minutes: 32,
    },
    {
      userImage: '/images/friend-2.jpg',
      user: 'jules chris',
      activity: 'posting a new',
      minutes: 35,
    },
    {
      userImage: '/images/friend-2.jpg',
      user: 'chris paul',
      activity: 'Like your last picture',
      minutes: 55,
    },
  ];

  function showActivity(activy: string) {
    if(activy.length < 20) return activy
    return activy.substring(0, 15) + '...';
  }

  return (
    <div className='lastActivities'>
      <div className='container'>
        <div className='activities'>
          <span>latest activies</span>
          {lastActivies.map((activity, index) => (
            <div key={index} className='activity'>
              <div className='user'>
                <img src={activity.userImage} alt={activity.activity} />
                <span>{activity.user}</span>
                <span>{showActivity(activity.activity)}</span>
              </div>
              <span>{activity.minutes} min ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
