import {useEffect, useRef} from "react"

export const useObserver = (ref, callback, deps = [], info = true) => {
    const observer = useRef()
    useEffect(() => {
        if (!info || !info.next) return;

        const observerFunc = function (entries, observer) {
            if (entries[0].isIntersecting) {
                observer.disconnect()
                callback()
            }
        }

        observer.current = new IntersectionObserver(observerFunc)
        observer.current.observe(ref.current)
    }, deps)
}