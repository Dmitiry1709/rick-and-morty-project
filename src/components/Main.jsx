import React from "react"
import {useCharacters} from "../contexts/Characters"
import CharactersList from "./CharactersList"
import Filter from "./Filter"
import {Layout, Typography, Spin} from "antd"
import {TITLE} from "../consts/Messages"

const {Content, Header} = Layout
const {Title} = Typography

function Main() {
    const loader = useCharacters().characters.loader

    return (
        <Spin spinning={loader} size="large">
            <Layout>
                <Header className='header'>
                    <Title className='header-title' type={'warning'}>{TITLE}</Title>
                </Header>
                <Content className='characters'>
                    <Filter/>
                    <CharactersList/>
                </Content>
            </Layout>
        </Spin>
    );
}

export default Main;
