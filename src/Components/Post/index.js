
import React, {useState, useEffect} from 'react'
import {Avatar, Button, Card, Image, Tag, Timeline, Typography} from "antd";
import './index.css'
import {Like} from "../Like";

const {Text} = Typography

export const Post = (props) => {
    
    const {postInfo, meId, deletePost} = props.props

   
    const [state, setState] = useState({
        data: postInfo,
        author: postInfo.author,
        countLike: postInfo.likes.length,
        isLiked: false,
        idPost: postInfo._id,
    })

   
    useEffect(() => {
        console.log(state.data.likes)
        if (state.data.likes.includes(meId)) {
            setState({
                ...state,
                isLiked: true
            })
        }
    }, [])


    const putLike = () => {
        fetch(`https://api.react-learning.ru/posts/likes/${state.idPost}`, {
            method: "PUT",
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'
            }
        })
            .then(res => {
                if (res.ok) setState({...state, countLike: state.countLike + 1, isLiked: true})

            })
    }

    
    const deleteLike = () => {
        fetch(`https://api.react-learning.ru/posts/likes/${state.idPost}`, {
            method: "DELETE",
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'
            }
        })
            .then(res => {
                if (res.ok) setState({...state, countLike: state.countLike - 1, isLiked: false})

            })
    }

   
    return (
        <Card title={<a>{state.data.title}</a>} style={{width: 300}}>
            <div className="card__avatar-box">
                <Avatar src={<Image src={state.author.avatar}/>} className="card__avatar"/>
                <Text strong>{state.author.email}</Text>
            </div>
            <p>{state.data.text}</p>
            <div className="card__tag-box">
                <span>Tags:</span>
                {state.data.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
            </div>
            <Timeline>
                <Timeline.Item>{state.data.created_at}</Timeline.Item>
                <Timeline.Item color="green">Last edit: {state.data.updated_at}</Timeline.Item>
            </Timeline>
            <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <Like props={{
                    countLike: state.countLike,
                    idPost: state.idPost,
                    isLiked: state.isLiked,
                    deleteLike,
                    putLike
                }} key={state.data._id}/>
                <Button danger onClick={() => deletePost(state.data._id)}>Удалить</Button>
            </div>
        </Card>
    )
}