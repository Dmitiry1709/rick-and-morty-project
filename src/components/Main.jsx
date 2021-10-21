import React, {useRef} from "react"
import {useBaseContext} from "../contexts/BaseContext"
import List from "./List/List"
import Filter from "./Filter/Filter"
import {Layout, Typography, Spin} from "antd"
import {TITLE} from "../consts/messages"
import {CLOSE_MODAL, OPEN_MODAL, SET_FILTER} from "../consts/reducerTypes"

const {Content, Header} = Layout
const {Title} = Typography

function Main() {
    const {state, dispatch} = useBaseContext()

    const setFilter = (value, name) => {
        dispatch({
            type: SET_FILTER,
            filterName: name,
            filterValue: value
        })
    }

    const openModal = (i) => dispatch({type: OPEN_MODAL, item: i})
    const closeModal = () => dispatch({type: CLOSE_MODAL})

    return (
        <Spin
            spinning={state.loader}
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
                    <Filter
                        fields={state.filterFields}
                        setFilter={setFilter}
                    />
                    <List
                        items={state.items}
                        modal={state.modal}
                        modalProps={state.modalProps}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                </Content>
            </Layout>
        </Spin>
    );
}

export default Main
