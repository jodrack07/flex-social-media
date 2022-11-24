import { useAppSelector } from '../../app/hooks';
import './stories.scss';

export default function Stories() {
    const user = useAppSelector(state => state.auth.user);
    const stories = [
        {
            username: 'jone doe',
            picture: '/images/friend-1.jpg'
        },
        {
            username: 'smith jones',
            picture: '/images/friend-2.jpg'
        },
        {
            username: 'samuel kone',
            picture: '/images/friend-1.jpg'
        },
        {
            username: 'smith jones',
            picture: '/images/friend-1.jpg'
        },
        // {
        //     username: 'kyle john',
        //     picture: '/images/friend-2.jpg'
        // },
    ]
    return (
        <div className="stories">
            <div className="container">
            <div className="story">
                        <img src={user.profilePicture} alt={user.username} />
                        <span>{user.username}</span>
                        <button>+</button>
                    </div>
                {stories.map((story, index) => (
                    <div key={index} className="story">
                        <img src={story.picture} alt={story.username} />
                        <span>{story.username}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
