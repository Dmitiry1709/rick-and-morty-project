import React from "react"
import {Card} from "antd"

const {Meta} = Card

function Slab(props) {
    const {item, openModal} = props

    return (
        <Card
            onClick={openModal}
            hoverable
            className='card'
            cover={<img src={item.image} alt={item.name}/>}
        >
            <Meta className='card-meta' title={item.name}/>
        </Card>
    )
}

export default Slab