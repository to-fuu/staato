'use client'
import {ReactNode, useEffect} from "react";
import {ReactLenis} from '@studio-freight/react-lenis'
import Cursor from "@/components/cursor";
import {Scrollbar} from "@/components/scrollbar";
import ScrollProgress from "@/components/ScrollProgress";
import {useMounted} from "@/hooks/useMounted";
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


export default function PageWrapper({children}: { children?: ReactNode }) {

    const mounted = useMounted()

    useEffect(() => {
        if (mounted) return

        gsap.registerPlugin(ScrollTrigger);

        // handleScroll()
    }, [mounted]);

    return <ReactLenis root>
        {children}
        <Scrollbar/>
        <Cursor/>
        <ScrollProgress/>


        <div className="transition-border fixed inset-0 pointer-events-none border-stone-950"></div>
        <div className="transition-new-page fixed inset-x-0 h-screen top-full bg-white pointer-events-none "></div>


    </ReactLenis>

}