import React, { useEffect, useState } from "react";
import "./Timeline.css"
import Suggestions from './Suggestions';
import Post from "./posts/Post";

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "taylorswift",
            postImage: "https://stylecaster.com/wp-content/uploads/2018/07/taylor-swift.jpg",
            likes: 1300,
            timestamp: "12h",
        },
        {
            user: "boygenius",
            postImage: "https://media.npr.org/assets/img/2023/03/30/friends-boygenius-photo-credit_-mikayla-lobasso-jpg_wide-4a01813e862332d81e78a5dc782bb0c319a5dd46.jpg",
            likes: 564,
            timestamp: "1h",
        },
        {
            user: "maggierogers",
            postImage: "https://assets.vogue.com/photos/6618259ec98a4196f99ef8b8/1:1/w_1537,h_1537,c_limit/59110026%20-%20Credit%20Maddy%20Rotman.jpeg",
            likes: 732,
            timestamp: "8h",
        },
    ]);
    return (
        <div className='timeline'>
            <div className="timeline__left">
                <div className="timeline__post">
                    {posts.map((post) => (
                        <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    );
}

export default Timeline