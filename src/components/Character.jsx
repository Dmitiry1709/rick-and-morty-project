import React, {useState} from "react"
import {Card, Modal} from "antd"
import DetailCharacter from "./DetailCharacter";
import {MODAL_CHARACTER} from "../consts/Messages";

const { Meta } = Card

function Character(props) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Modal
                title={MODAL_CHARACTER.title + props.data.name}
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[]}
                width={600}
            >
                <DetailCharacter data={props.data}/>
            </Modal>
            <Card
                onClick={prev => setVisible(true)}
                hoverable
                className='characters-card'
                cover={<img src={props.data.image} alt={props.data.name}/>}
            >
                <Meta className='characters-card-meta' title={props.data.name}/>
            </Card>
        </>
    )
}

export default Character