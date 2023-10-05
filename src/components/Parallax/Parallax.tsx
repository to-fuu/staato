import {ReactNode} from "react";
import cn from "clsx";

export default function Parallax({
                                     children,
                                     className,
                                     speed = 1,
                                     direction = 'vertical',
                                     fade = false,
                                     scrollStartOffset = 0,
                                     opacityOffset = 0
                                 }: {
    children: ReactNode,
    className?: string,
    speed?: number,
    direction?: 'vertical' | 'horizontal'
    fade?: boolean
    scrollStartOffset?: number
    opacityOffset?: number
}) {


    return <span data-speed={speed} data-scroll={direction} data-fade={fade}
                 data-opacity-offset={opacityOffset} data-scroll-offset={scrollStartOffset}
                 className={cn('inline-block', className)}>
        {children}
    </span>

}