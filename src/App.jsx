
import React, {useState, useEffect} from "react";
import {Layout, Spin} from "antd";
import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";
import {PostList} from "./Components/PostList";
import './index.css'


export const App = () => {
  
    const [state, setState] = useState({
        loading: true,
        loaded: false,
        meId: '',
        data: []
    })

    
    useEffect(() => {
        fetch('https://api.react-learning.ru/posts', {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'
            }
        })
            .then(res => res.json())
            .then(obj => setState({
                ...state,
                loading: false,
                loaded: true,
                data: obj,
            }))
        fetch('https://api.react-learning.ru/users/me', {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'
            }
        })
            .then(res => res.json())
            .then(obj => setState({
                ...state,
                meId: obj._id
            }))
    }, [])

   
    let postlist
    if (state.loading) {
        postlist = <Spin size={"large"} className="spinner"/>
    } else {
        postlist = <PostList props={state}/>
    }
    console.log(state.meId)

    return (
        <>
            {}
            <Layout>
                <div className="wrap">
                    <Header/>
                    {postlist}
                </div>
                <Footer/>
            </Layout>
        </>
    )
}