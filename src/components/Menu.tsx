'use client'
import {useEffect, useState} from "react";
import gsap from "gsap";
import cn from "clsx";
import TransitionLink from "@/components/TransitionLink";
import {useLenis} from "@studio-freight/react-lenis";
import {usePathname} from "next/navigation";

export default function Menu() {

    const pathname = usePathname()


    const lenis = useLenis()
    const [open, setOpen] = useState(false)

    const CloseOnNavigation = () => {
        lenis?.start()
        setOpen(false)

        gsap.set('.bdrop', {
            opacity: 0,
            pointerEvents: 'none',

        })

        gsap.set('.menu', {
            right: -500
        })

        gsap.set('#menu-trigger', {
            zIndex: 1
        })

        gsap.set('#menu-animation-bg', {
            right: -500
        })

    }
    const Close = () => {

        lenis.start()
        setOpen(false)

        gsap.fromTo('.bdrop', {
            opacity: 1,
            pointerEvents: 'auto'
        }, {
            opacity: 0,
            pointerEvents: 'none'

        })

        gsap.fromTo('.menu', {
            right: 0
        }, {
            right: -500,
            ease: 'power3'

        })

        gsap.fromTo('#menu-animation-bg', {
            right: 0
        }, {
            right: -500,
            ease: 'power2',
            onComplete: () => {
                gsap.set('#menu-trigger', {
                    zIndex: 1
                })
            }
        })


        gsap.to('#menu-trigger-bd', {
            rotate: 45
        })


    }
    const Open = () => {

        lenis.stop()
        setOpen(true)

        gsap.set('#menu-trigger', {
            zIndex: 1001
        })

        gsap.to('#menu-trigger-bd', {
            rotate: 450 - 45,
        })

        gsap.fromTo('.bdrop', {
            opacity: 0,
            pointerEvents: 'none'

        }, {
            opacity: 1,
            pointerEvents: 'auto'
        })


        gsap.fromTo('.menu', {
            right: -500,
        }, {
            right: 0,
            ease: 'power2'
        })
        gsap.fromTo('#menu-animation-bg', {
            right: -500
        }, {
            right: 0,
            ease: 'power3'
        })


    }


    useEffect(() => {
        if (open)
            CloseOnNavigation()
    }, [pathname]);

    return <>

        {/* Menu */}
        <div className="fixed bg-black/50 inset-0 bdrop opacity-0 pointer-events-none z-[998]"
             onClick={Close}
        />
        <div
            id={'menu-animation-bg'}
            className="fixed right-[-500px] inset-y-0 bg-rose-500 w-[500px]  z-[999]"/>
        <div
            className="fixed right-[-500px] h-screen top-0 bg-black w-[500px] menu px-12 flex flex-col text-4xl z-[1000]">

            <p className={'text-base opacity-50 uppercase mb-8 mt-auto'}>Menu</p>

            <TransitionLink href={'/'} className={'mb-4'}>
                Home
            </TransitionLink>


            <TransitionLink href={'/page2'} className={'mb-auto'}>
                Page 2
            </TransitionLink>

        </div>

        {/* Trigger */}
        <button
            onClick={() => {
                if (open) Close()
                else Open()
            }}
            id={'menu-trigger'}
            className={'text-2xl ml-6 flex items-center relative justify-center gap-1 flex-col w-12 h-12 group z-[1]'}>
            <span id={'menu-trigger-bd'}
                  className={cn("absolute inset-0 rounded rotate-45 ring-stone-950 duration-300 transition-colors",
                      open ? 'bg-white' : 'bg-rose-500 ring-4 '
                  )}></span>
            <span className={cn("w-8 h-0.5 relative duration-300",
                open ? 'bg-black rotate-45 translate-y-1' : 'bg-white group-hover:scale-x-90')}/>
            <span className={cn("w-8 h-0.5 relative duration-300",
                open ? 'bg-black -rotate-45 -translate-y-0.5' : 'bg-white group-hover:scale-x-110')}/>

        </button>

    </>

}