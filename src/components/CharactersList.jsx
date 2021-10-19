import React from "react"
import {useCharacters} from "../contexts/Characters";
import {Col, Row, Card} from "antd";

const { Meta } = Card

function CharactersList() {
    const characters = useCharacters().characters.data

    if (characters.results) {
        return (
            <Row justify={'center'} wrap gutter={[16, 16]}>
                {characters.results.map(i =>
                    <Col key={i.id}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img src={i.image} alt={i.name}/>}
                        >
                            <Meta className='characters-card-meta' title={i.name}/>
                        </Card>
                    </Col>
                )}
            </Row>
        )
    }

    return (
        <>
        </>
    )
}

export default CharactersList