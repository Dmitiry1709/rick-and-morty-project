import React from "react"
import {useCharacters} from "../contexts/Characters"
import {Col, Row, Card, Typography} from "antd"
import {NO_CHARACTERS} from "../consts/Messages"

const { Meta } = Card
const {Title} = Typography

function CharactersList() {
    const characters = useCharacters().characters.data

    if (characters.results) {
        return (
            <Row justify={'center'} gutter={[16, 16]}>
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
        <Title className="characters-null-title" level={3}>{NO_CHARACTERS}</Title>
    )
}

export default CharactersList