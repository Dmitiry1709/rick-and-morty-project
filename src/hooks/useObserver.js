import {useEffect, useRef} from "react"

export const useObserver = (ref, callback, deps = [], isStart = true) => {
    const observer = useRef()
    useEffect(() => {
        if (!isStart) return null
        if (observer.current) observer.current.disconnect()

        const observerFunc = function (entries, observer) {
            if (entries[0].isIntersecting) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(observerFunc)
        observer.current.observe(ref.current)
    }, deps)
}