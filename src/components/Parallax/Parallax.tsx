import {ReactNode, useEffect, useRef} from "react";
import cn from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Parallax({
                                     children,
                                     className,
                                     speed = 1,
                                     direction = 'vertical',
                                     fade = false,
                                     opacityOffset = 0
                                 }: {
    children: ReactNode,
    className?: string,
    speed?: number,
    direction?: 'vertical' | 'horizontal'
    fade?: boolean
    opacityOffset?: number
}) {

    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {

        if (ref.current) {

            gsap.to(ref.current, {
                scrollTrigger: {
                    scrub: 0.5,
                    trigger: ref.current,
                    start: 'top ' + ref.current.offsetTop
                },
                y: () => direction === 'horizontal' ? 0 : (-ScrollTrigger.maxScroll(window)) * speed / 10,
                x: () => direction === 'vertical' ? 0 : (-ScrollTrigger.maxScroll(window)) * speed / 10,

            });
            fade && gsap.to(ref.current, {
                scrollTrigger: {
                    scrub: 0.5,
                    trigger: ref.current,
                    start: 'top ' + (ref.current.offsetTop * speed - opacityOffset),
                },
                opacity: 0,
            });
        }

    }, [ref,direction,fade,opacityOffset,speed]);

    return <span ref={ref} className={cn('inline-block', className)}>
        {children}
    </span>

}