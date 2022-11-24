import type { IPost } from '../../types/post';
import Post from '../post/Post';
import './posts.scss';

export default function Posts() {
    const posts: IPost[] = [
        {
            id: 1,
            userId: 2,
            name: 'jane doe',
            postedPicture: '/images/friend-1.jpg',
            profilePicture: '/images/friend-1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam doloribus. Sequi exercitationem porro, esse provident ipsa nesciunt amet, reprehenderit ullam aut iure cumque illo dignissimos, laudantium magni pariatur voluptates!'
        },
        {
            id: 2,
            userId: 1,
            name: 'kyle smith',
            postedPicture: '/images/friend-2.jpg',
            profilePicture: '/images/friend-2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam doloribus. Sequi exercitationem porro, esse provident ipsa nesciunt amet, reprehenderit ullam aut iure cumque illo dignissimos, laudantium magni pariatur voluptates!'
        }
    ]
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}
