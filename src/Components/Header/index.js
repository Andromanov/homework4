
import React from "react"
import {Button, PageHeader} from "antd";
import './index.css'

export const Header = () => {

       const routes = [
        {
            path: '1',
            breadcrumbName: 'HomePage',
        },
        {
            path: '2',
            breadcrumbName: 'Posts',
        },
    ];

    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Posts"
                breadcrumb={{ routes }}
            />
            <div className="header-button">
                {}
                <Button onClick={() => console.log("Есть контакт")}>Create Post</Button>
            </div>
        </>
    )
}