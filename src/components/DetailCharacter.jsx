import React from "react"
import {Row, Col} from "antd";
import {MODAL_CHARACTER} from "../consts/Messages";


function DetailCharacter(props) {
    const character = props.data
    const properties = []

    for (let key in MODAL_CHARACTER) {
        if (character[key] && character[key] !== '') {
            if (key === 'created') {
                let prop = <li>{MODAL_CHARACTER[key] + new Date(character[key]).toLocaleDateString()}</li>
                properties.push(prop)
            } else {
                let prop = <li>{MODAL_CHARACTER[key] + character[key]}</li>
                properties.push(prop)
            }

        }
    }

    return (
        <Row gutter={[16, 16]}>
            <Col>
                <img
                    className='characters-card-modal'
                    src={character.image}
                    alt={character.name}
                />
            </Col>
            <Col>
                <ul>
                    {properties}
                </ul>
            </Col>
        </Row>
    )
}

export default DetailCharacter