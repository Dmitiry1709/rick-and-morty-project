import React from "react"
import {useCharacters} from "../contexts/Characters"
import {Col, Row, Typography} from "antd"
import {NO_CHARACTERS} from "../consts/Messages"
import Character from "./Character";

const {Title} = Typography

function CharactersList() {
    const characters = useCharacters().characters.data

    if (characters.results) {
        return (
            <Row justify={'center'} gutter={[16, 16]}>
                {characters.results.map(i =>
                    <Col key={i.id}>
                        <Character data={i}/>
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