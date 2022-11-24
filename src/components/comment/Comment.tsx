import { useAppSelector } from '../../app/hooks';
import { PrimaryButton } from '../helpers/Button/Button';
import './comment.scss';

export default function Comment() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className='comment'>
      <div className='userBox'>
        <div className='image'>
          <img
            src={user.profilePicture}
            alt={user.username.concat('comment')}
          />
        </div>
        <input
          type='text'
          name='comment'
          id='comment'
          placeholder='Write a comment...'
        />
        <PrimaryButton
          _type='button'
          _class='_btn'
          onClick={() => console.log('commenting....')}
        >
          Comment
        </PrimaryButton>
      </div>
      <div className='otherPeoplecomments'>
        <div className='comment'>
        <img src='/images/friend-2.jpg' alt='comment' />
          <div className='details'>
            <div className='descriptionBox'>
              <span className='user'>john doe</span>
              <p className='description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus perspiciatis labore tempora officia cupiditate nemo
                molestiae hic saepe aperiam ipsa at natus eius, dignissimos
                ducimus, cum quos quidem amet provident!
              </p>
            </div>
            <span className='timing'>1 hour ago</span>
          </div>
        </div>
        <div className='comment'>
          <img src='/images/friend-1.jpg' alt='comment' />
          <div className='details'>
            <div className='descriptionBox'>
              <span className='user'>john doe</span>
              <p className='description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus perspiciatis labore tempora officia cupiditate nemo
                molestiae hic saepe aperiam ipsa at natus eius, dignissimos
                ducimus, cum quos quidem amet provident!
              </p>
            </div>
            <span className='timing'>1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
