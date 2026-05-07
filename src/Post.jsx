export default function Post ({post}){
    return(
        <div className="card">
            <h4>{post.title}</h4>
            <br />
            <p>{post.body}</p>
        </div>
    )
}