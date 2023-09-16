import './posts.css'
import Post from '../../components/post/Post'
export default function Posts(props) {
  return (
    <div className="posts">
     {props.posts.map((p) => (
      <Post post={p}/>
     ))}
    </div>
  );
}
