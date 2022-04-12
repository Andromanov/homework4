
import React, { useState } from 'react'
import {Post} from "../Post";

import './index.css'
import {Spin} from "antd";


export const PostList = (props) => {
    const [state, setState] = useState({
        data: props.props.data,
        meId: props.props.meId,
        isDeleted: false
    })

    
    const deletePost = (id) => {
        alert('Вы уверены, что хотите удалить пост?')
        fetch(`https://api.react-learning.ru/posts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'
            }
        })
            .then(res => {
                if (res.ok) {
                    setState({
                        ...state,
                        isDeleted: true
                    })
                }
            })
    }

    return (
        <div className="postlist">
            {
                
                state.data.map((postInfo, idx) => {
                   
                    return (
                        <Post props={{postInfo: postInfo, meId: state.meId, deletePost}} key={idx}/>
                    )
                })
            }
        </div>
    )
}