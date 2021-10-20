import React from "react"
import {Row, Col, Modal} from "antd"


function ModalWindow(props) {
    const {modal, modalProps, closeModal} = props

    if (modal) {
        const properties = []

        for (let key in modalProps) {
            if (modal[key] && modal[key] !== '') {
                if (key === 'created') {
                    let prop = <li>{modalProps[key] + new Date(modal[key]).toLocaleDateString()}</li>
                    properties.push(prop)
                } else {
                    let prop = <li>{modalProps[key] + modal[key]}</li>
                    properties.push(prop)
                }

            }
        }

        return (
            <Modal
                title={modalProps.title + modal.name}
                centered
                visible={modal}
                onCancel={closeModal}
                footer={[]}
                width={600}
            >
                <Row gutter={[16, 16]}>
                    <Col>
                        <img
                            className='card-modal'
                            src={modal.image}
                            alt={modal.name}
                        />
                    </Col>
                    <Col>
                        <ul>
                            {properties}
                        </ul>
                    </Col>
                </Row>
            </Modal>
        )
    }

    return null
}

export default ModalWindow