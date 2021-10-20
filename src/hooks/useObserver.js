import {useEffect, useRef} from "react";
import {OBSERVER, OBSERVER_START} from "../consts/reducerTypes"

export const useObserver = (ref, state, dispatch) => {
    const observer = useRef()
    useEffect(() => {
        if(!state.observerStart) return null
        if(observer.current) observer.current.disconnect();

        const callback = function(entries, observer) {
            if(entries[0].isIntersecting ){
                dispatch({type: OBSERVER_START})
                fetch(state.info.next)
                    .then(response => response.json())
                    .then(response => {
                        dispatch({type: OBSERVER_START})
                        dispatch({
                            type: OBSERVER,
                            data: response
                        })
                    })
            }
        }

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current)
    },[state.info])
}