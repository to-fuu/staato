//@ts-ignore
import {useRect, useWindowSize} from '@studio-freight/hamo'
import {useLenis} from '@studio-freight/react-lenis'
import {useEffect, useRef, useState} from 'react'
import {clamp, mapRange} from "@/lib/math";
import s from './scrollbar.module.scss'
import {usePathname} from "next/navigation";

export function Scrollbar() {
    const thumb = useRef<HTMLDivElement>()
    const {width: windowWidth, height: windowHeight} = useWindowSize()
    const lenis = useLenis()
    const [innerMeasureRef, {height: innerHeight}] = useRect()
    const [thumbMeasureRef, {height: thumbHeight}] = useRect()

    const pathname = usePathname()
    useEffect(() => {
        if (!lenis) return
        if (document.body.clientHeight <= windowHeight) {
            lenis.scrollTo(0, {duration: 0})
            lenis.stop()
            if (thumb.current)
                thumb.current.style.display = 'none'
        } else {
            if (thumb.current)
                thumb.current.style.display = 'block'
            lenis.start()
        }


    }, [windowHeight, lenis, pathname,thumb]);

    useLenis(
        ({scroll, limit, stop, start}) => {


            console.log()
            const progress = scroll / limit
            if (thumb.current)
                (thumb.current as HTMLDivElement).style.transform = `translate3d(0,${progress * (innerHeight - thumbHeight)}px,0)`
        },
        [innerHeight, thumbHeight],
    )

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (!clicked) return

        function onPointerMove(e: MouseEvent) {
            e.preventDefault()

            const offset = (windowHeight - innerHeight) / 2
            const y = mapRange(0, windowHeight, e.clientY, -offset, innerHeight + offset)

            const progress = clamp(0, y / innerHeight, 1)
            const newPos = lenis.limit * progress

            lenis.isHorizontal ? window.scrollTo(newPos, 0) : window.scrollTo(0, newPos)
        }

        function onPointerUp() {
            setClicked(false)
        }

        window.addEventListener('pointermove', onPointerMove, false)
        window.addEventListener('pointerup', onPointerUp, false)

        return () => {
            window.removeEventListener('pointermove', onPointerMove, false)
            window.removeEventListener('pointerup', onPointerUp, false)
        }
    }, [clicked, windowHeight, windowWidth, lenis, innerHeight])

    return (
        <div
            className={s.scrollbar}
        >
            <div ref={innerMeasureRef} className={s.inner}>
                <div
                    className={s.thumb}
                    ref={(node) => {
                        thumb.current = node || undefined
                        thumbMeasureRef(node)
                    }}
                    onPointerDown={() => {
                        setClicked(true)
                    }}
                />
            </div>
        </div>
    )
}