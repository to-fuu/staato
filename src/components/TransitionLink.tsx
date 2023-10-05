'use client'
import {MouseEvent, ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";
import gsap from "gsap";
import {useLenis} from "@studio-freight/react-lenis";
import Link from "next/link";

export const FinishPageTransition = () => {

    gsap.to('.transition-new-page', {
        top: "-100%",delay:0.3
    })

}

export default function TransitionLink({children, href, className}: {
    children?: ReactNode,
    href: string,
    className?: string
}) {

    const pathFromHref = new URL(href, 'http://localhost:3000').pathname
    const router = useRouter()
    const pathname = usePathname()
    const lenis = useLenis()
    const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {

        e.preventDefault()

        if (pathname === pathFromHref || pathname === '#') {
            lenis.scrollTo(0)
            return
        }

        gsap.to('.transition-border', {
            borderWidth: 48
        })
        gsap.set('.transition-border', {
            pointerEvents: 'none'
        })
        gsap.to('main', {
            scale: 0.98
        })
        gsap.set('.transition-new-page', {
            opacity: 1,
            top: '100%'
        })
        gsap.to('.transition-new-page', {
            top: 0,
            delay: 0.2,
            ease: 'power2',
            onComplete: () => {
                lenis.scrollTo(0, {
                    duration: 0
                })
                gsap.set('.transition-border', {
                    borderWidth: 0
                })
                gsap.set('main', {
                    scale: 1,
                    pointerEvents: 'auto',
                })
                router.push(href)
            }
        })
    }
    return <Link href={href} onClick={handleNavigation} className={className}>

        {children}
    </Link>

}