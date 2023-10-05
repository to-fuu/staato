import cn from 'clsx'
import gsap from 'gsap'
import {useCallback, useEffect, useRef, useState} from 'react'
import s from './cursor.module.scss'

export default function Cursor() {
    const cursor = useRef<HTMLDivElement>(null)
    const [isGrab, setIsGrab] = useState(false)
    const [isPointer, setIsPointer] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isText, setIsText] = useState(false)
    const [hasMoved, setHasMoved] = useState(false)

    const onMouseMove = useCallback(
        ({clientX, clientY}: { clientX: number, clientY: number }) => {
            gsap.to(cursor.current, {
                x: clientX,
                y: clientY,
                duration: hasMoved ? 0.6 : 0,
                ease: 'expo.out',
            })
            gsap.to('#project-hover', {
                overwrite: "auto",
                x: clientX - 24,
                y: clientY - 24,
                duration: hasMoved ? 0.6 : 0,
                ease: 'expo.out',
            });


            setHasMoved(true)
        },
        [hasMoved]
    )

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove, false)

        return () => {
            window.removeEventListener('mousemove', onMouseMove, false)
        }
    }, [hasMoved, onMouseMove])

    useEffect(() => {
        document.documentElement.classList.add('has-custom-cursor')

        return () => {
            document.documentElement.classList.remove('has-custom-cursor')
        }
    }, [])


    useEffect(() => {
        let elements: HTMLElement[] = Array.from(document.querySelectorAll("p,h1,h2,h3,[data-cursor='text']"))

        const onMouseEnter = () => {
            setIsText(true)
        }
        const onMouseLeave = () => {
            setIsText(false)
        }


        elements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter, false)
            element.addEventListener('mouseleave', onMouseLeave, false)
        })

        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter, false)
                element.removeEventListener('mouseleave', onMouseLeave, false)
            })
        }
    }, [])


    useEffect(() => {
        let elements: HTMLElement[] = Array.from(document.querySelectorAll("button,a,input,label,[data-cursor='pointer']"))

        const onMouseEnter = () => {
            setIsPointer(true)
        }
        const onMouseLeave = () => {
            setIsPointer(false)
        }


        elements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter, false)
            element.addEventListener('mouseleave', onMouseLeave, false)
        })

        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter, false)
                element.removeEventListener('mouseleave', onMouseLeave, false)
            })
        }
    }, [])

    useEffect(() => {
        let elements: HTMLElement[] = Array.from(document.querySelectorAll(".project"))

        const onMouseEnter = () => {
            setIsProject(true)
        }
        const onMouseLeave = () => {
            setIsProject(false)
        }


        elements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter, false)
            element.addEventListener('mouseleave', onMouseLeave, false)
        })

        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter, false)
                element.removeEventListener('mouseleave', onMouseLeave, false)
            })
        }
    }, [])

    useEffect(() => {
        let elements: HTMLElement[] = Array.from(document.querySelectorAll("button,a,input,label,[data-cursor='pointer']"))

        const onMouseEnter = () => {
            setIsGrab(true)
        }
        const onMouseLeave = () => {
            setIsGrab(false)
        }

        elements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter, false)
            element.addEventListener('mouseleave', onMouseLeave, false)
        })

        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter, false)
                element.removeEventListener('mouseleave', onMouseLeave, false)
            })
        }
    }, [])

    return (
        <div style={{opacity: hasMoved ? 1 : 0}} className={s.container}>
            <div ref={cursor}>
                <div className={cn(s.cursor, isGrab && s.grab, isPointer && s.pointer, isProject && s.project, isText && s.text)}/>
            </div>
        </div>
    )
}

