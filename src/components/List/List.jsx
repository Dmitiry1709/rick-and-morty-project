import React from "react"
import {useBaseContext} from "../../contexts/BaseContext"
import {Col, Row, Typography} from "antd"
import {NO_ITEMS} from "../../consts/messages"
import Slab from "./Slab"
import ModalWindow from "./ModalWindow"
import {CLOSE_MODAL, OPEN_MODAL} from "../../consts/reducerTypes"

const {Title} = Typography

function List() {
    const {state, dispatch} = useBaseContext()
    const {items, modal, modalProps} = state

    if (items) {
        return (
            <>
                <Row justify={'center'} gutter={[16, 16]}>
                    {items.map(i =>
                        <Col key={i.id}>
                            <Slab
                                item={i}
                                openModal={() => dispatch({type: OPEN_MODAL, item: i})}
                            />
                        </Col>
                    )}
                </Row>
                <ModalWindow
                    modal={modal}
                    modalProps={modalProps}
                    closeModal={() => dispatch({type: CLOSE_MODAL})}
                />
            </>
        )
    }

    return (
        <Title
            className="null-text"
            level={3}
        >
            {NO_ITEMS}
        </Title>
    )
}

export default List