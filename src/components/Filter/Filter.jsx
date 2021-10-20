import React from "react"
import {useBaseContext} from "../../contexts/BaseContext"
import {SET_FILTER} from "../../consts/reducerTypes"
import {Row, Col, Input, Select} from 'antd'
import {FILTER_SELECT_DEFAULT} from "../../consts/messages"

const {Option} = Select

function Filter() {
    const {state, dispatch} = useBaseContext()
    const setFilter = (value, name) => {
        dispatch({
            type: SET_FILTER,
            filterName: name,
            filterValue: value
        })
    }

    const selects = []
    for (let key in state.filterFields.selects) {
        let select =
            <Col key={key}>
                <Select
                    className='filter-select'
                    defaultValue={''}
                    onChange={(value) => setFilter(value, key)}
                    name={key}
                >
                    <Option value="">{FILTER_SELECT_DEFAULT}</Option>
                    {state.filterFields.selects[key].map((i, index) =>
                        <Option key={index} value={i}>{i}</Option>
                    )}
                </Select>
            </Col>

        selects.push(select)
    }

    return (
        <Row className='filter' justify={'center'} gutter={[16, 16]}>
            {state.filterFields.inputs.map((i, index) =>
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