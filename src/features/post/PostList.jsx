import { useDispatch, useSelector } from "react-redux"
import { selectAllPosts, getPostStatus, getPostsError, fetchPosts } from "./postSlice"
import PostExcert from "./PostExcert"

import { useEffect } from "react"

const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcert key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )

}

export default PostList