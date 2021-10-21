import React, {useRef} from "react"
import {useObserver} from "../../hooks/useObserver";
import {callbackObserver} from "../../utils/callbackObserver";
import {useBaseContext} from "../../contexts/BaseContext";

function DynamicPagination() {
    const {state, dispatch} = useBaseContext()
    const divider = useRef()

    useObserver(
        divider,
        callbackObserver(dispatch, state.info),
        [state.info],
        state.info
    )

    return (
        <div
            className='divider'
            ref={divider}
        >
        </div>
    )
}

export default DynamicPagination