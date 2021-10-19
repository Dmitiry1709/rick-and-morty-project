import React from "react"
import {CHARACTERS_INPUTS, CHARACTERS_SELECT} from "../consts/CharactersFilter"
import {useCharacters} from "../contexts/Characters"
import {SET_FILTER} from "../consts/CharactersReducerTypes"
import {Row, Col, Input, Select} from 'antd'

const { Option } = Select

function Filter() {
    const selects = []
    const charactersR = useCharacters().charactersR

    const setFilter = (value, name) => {
        charactersR({
            type: SET_FILTER,
            filterName: name,
            filterValue: value
        })
    }

    for (let key in CHARACTERS_SELECT) {
        let select =
            <Col key={key}>
                <Select
                    defaultValue={'unknown'}
                    onChange={(value) => setFilter(value, key)}
                    name={key}
                >
                    <Option value="unknown">Не выбрано</Option>
                    {CHARACTERS_SELECT[key].map((i, index) =>
                        <Option key={index} value={i}>{i}</Option>
                    )}
                </Select>
            </Col>

        selects.push(select)
    }

    return (
        <Row className='filter' justify={'center'} wrap gutter={[16, 16]}>
            {CHARACTERS_INPUTS.map((i, index) =>
                <Col key={index}>
                    <Input
                        onBlur={(event) => setFilter(event.target.value, i)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                setFilter(event, i)
                                event.target.blur()
                            }
                        }}
                        name={i}
                        placeholder={i}
                    />
                </Col>
            )}
            {selects}
        </Row>
    )
}

export default Filter