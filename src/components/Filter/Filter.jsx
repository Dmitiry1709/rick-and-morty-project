import React from "react"
import {Row, Col, Input, Select} from 'antd'
import {FILTER_SELECT_DEFAULT} from "../../consts/messages"

const {Option} = Select

function Filter(props) {
    const {fields, setFilter} = props
    const selects = []

    for (let key in fields.selects) {
        let select =
            <Col key={key}>
                <Select
                    className='filter-select'
                    defaultValue={''}
                    onChange={(value) => setFilter(value, key)}
                    name={key}
                >
                    <Option value="">{FILTER_SELECT_DEFAULT}</Option>
                    {fields.selects[key].map((i, index) =>
                        <Option key={index} value={i}>{i}</Option>
                    )}
                </Select>
            </Col>

        selects.push(select)
    }

    return (
        <Row className='filter' justify={'center'} gutter={[16, 16]}>
            {fields.inputs.map((i, index) =>
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