import React from "react"
import {Col, Row, Typography} from "antd"
import {NO_ITEMS} from "../../consts/messages"
import Slab from "./Slab"
import ModalCard from "../Utils/ModalCard"
import DynamicPagination from "../Utils/DynamicPagination";

const {Title} = Typography

function List(props) {
    const {items, modal, modalProps, openModal, closeModal} = props

    if (items) {
        return (
            <>
                <Row justify={'center'} gutter={[16, 16]}>
                    {items.map(i =>
                        <Col key={i.id}>
                            <Slab
                                item={i}
                                openModal={() => openModal(i)}
                            />
                        </Col>
                    )}
                </Row>
                <DynamicPagination />
                <ModalCard
                    modal={modal}
                    modalProps={modalProps}
                    closeModal={closeModal}
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