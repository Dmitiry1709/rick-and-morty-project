import React from "react"
import {useBaseContext} from "../contexts/BaseContext"
import List from "./List/List"
import Filter from "./Filter/Filter"
import {Layout, Typography, Spin} from "antd"
import {TITLE} from "../consts/messages"

const {Content, Header} = Layout
const {Title} = Typography

function Main() {
    const loader = useBaseContext().state.loader

    return (
        <Spin
            spinning={loader}
            size="large"
        >
            <Layout>
                <Header className='header'>
                    <Title
                        className='header-title'
                        type={'warning'}
                    >
                        {TITLE}
                    </Title>
                </Header>
                <Content className='container'>
                    <Filter/>
                    <List/>
                </Content>
            </Layout>
        </Spin>
    );
}

export default Main
