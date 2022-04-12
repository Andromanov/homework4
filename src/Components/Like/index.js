
import React, { useState } from 'react'
import {HeartTwoTone} from "@ant-design/icons";
import './index.css'
import Text from "antd/lib/typography/Text";

export const Like = (props) => {
    const { countLike, putLike, deleteLike, isLiked } = props.props
    console.log(isLiked)
   
    let heart
    if (isLiked) {
        heart = <HeartTwoTone className="like__heart" twoToneColor="#eb2f96" onClick={() => deleteLike()} />
    } else {
        heart = <HeartTwoTone className="like__heart" onClick={() => putLike()}/>
    }


    return (
        <div className="like" >
            {heart}
            <Text>{countLike}</Text>
        </div>
    )
}