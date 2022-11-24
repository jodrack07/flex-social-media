import { IPost } from '../../types/post';
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import Comment from '../comment/Comment';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { like } from '../../features/postSlice';

export default function Post({
  userId,
  name,
  profilePicture,
  postedPicture,
  description,
}: IPost) {
  const [showComment, setShowComment] = useState(false);
  const dispatch = useAppDispatch();
  const likes = useAppSelector(state => state.post.likes);

  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='left'>
            <img src={profilePicture} alt={name.concat('post')} />
            <div className='moreDetails'>
              <Link className='profileLink' to={`/profile/${userId}`}>
                {name}
              </Link>
              <span className='time'>a few second later</span>
            </div>
          </div>
          <div className='right'>
            <MoreHorizIcon />
          </div>
        </div>
        <div className='content'>
          <p>{description}</p>
          <img src={postedPicture} alt={description.substring(0, 10)} />
        </div>
        <div className='actions'>
          <div className='action'>
            <FavoriteIcon onClick={() => dispatch(like())} className='icon liked' />
            <span>{likes}</span>
          </div>
          <div className='action'>
            <CommentIcon
              onClick={() => setShowComment(!showComment)}
              className='icon'
            />
            <span>2</span>
          </div>
          <div className='action'>
            <ShareIcon className='icon' />
            <span>12</span>
          </div>
        </div>
        {showComment && <Comment />}
      </div>
    </div>
  );
}
