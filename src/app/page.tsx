'use client'
import {useEffect} from "react";
import {FinishPageTransition} from "@/components/TransitionLink";
import Parallax from "@/components/Parallax/Parallax";

export default function Home() {

    useEffect(() => {
        FinishPageTransition()
    }, []);

    return (
        <div
            className={'min-h-[200vh] py-24 flex flex-col items-center px-8 relative after:fixed after:inset-0 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-pink-600/20'}>

            <h1 className={'text-center text-[12vw] leading-[1.2] font-bold font-heading text-rose-500 text-stroke]'}>
                <div>
                    <Parallax speed={0.3}>P</Parallax>O<Parallax speed={0.3}>RT</Parallax>FO<Parallax
                    speed={0.5}>LIO</Parallax>
                </div>

                <div>
                    S<Parallax speed={0.4} className={'inline-block'}>T</Parallax>A<Parallax
                    speed={0.3}>RT</Parallax>E<Parallax
                    speed={0.5}>R</Parallax>
                </div>

            </h1>
            <p className={'text-4xl font-semibold uppercase mt-24 '}>
                {'SCROOOOLL'.split('').map((letter, index) =>
                    (<Parallax fade speed={Math.exp(index / 10)} key={index} opacityOffset={800}>
                        {letter}
                    </Parallax>)
                )}
            </p>

            <p className={'mt-auto text-[12vw]  font-heading text-center'}>
                <Parallax speed={-0.5}>H</Parallax>A<Parallax>PP</Parallax>Y <br/>{' '}<Parallax
                speed={-0.5}>CO</Parallax><Parallax speed={0.4}>DING</Parallax> <Parallax speed={-0.4}>:)</Parallax>
            </p>

        </div>
    )
}
