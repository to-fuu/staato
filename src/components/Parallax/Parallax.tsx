import {ReactNode} from "react";
import cn from "clsx";

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


    return <span data-speed={speed} data-scroll={direction} data-fade={fade}
                 data-opacity-offset={opacityOffset}
                 className={cn('inline-block', className)}>
        {children}
    </span>

}