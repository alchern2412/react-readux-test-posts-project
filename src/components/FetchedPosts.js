import React from 'react'
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)

    if (/*posts === undefined || */!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить</button>
    }
    return /*posts && */posts.map(post => <Post post={post} key={post.id}/>)

}