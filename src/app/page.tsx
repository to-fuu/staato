'use client'
import Parallax from "@/components/Parallax/Parallax";

export default function Home() {


    return (
        <div
            className={'min-h-[200vh] py-24 flex flex-col items-center px-8 relative'}>

            <h1 className={'text-center text-[12vw] leading-[1.2] font-bold font-heading text-rose-500 text-stroke]'}>
                <div className={'flex  justify-center items-center'}>
                    ST<Parallax scrollStartOffset={120} speed={0.3}>A</Parallax><Parallax scrollStartOffset={120}
                                                                                          speed={0.6}>A</Parallax><Parallax
                    scrollStartOffset={120} speed={1.2}>A</Parallax>TO
                </div>

                <div className={'flex justify-center items-center'}>
                    <Parallax scrollStartOffset={120} speed={0.4} className={'inline-block'}>T</Parallax>E<Parallax
                    scrollStartOffset={120} speed={0.3}>MP</Parallax>LA<Parallax
                    scrollStartOffset={120} speed={0.5}>T</Parallax><Parallax
                    scrollStartOffset={120} speed={0.7}>E</Parallax>
                </div>

            </h1>
            <p className={'text-4xl font-semibold uppercase mt-24 '}>
                {'SCROOOOLL'.split('').map((letter, index) =>
                    (<Parallax fade speed={Math.exp(index / 10)} key={index} opacityOffset={800}>
                        {letter}
                    </Parallax>)
                )}
            </p>

            <p id={'foot'} className={'mt-auto text-[12vw]  font-heading text-center'}>
                <Parallax speed={-0.5}>H</Parallax>A<Parallax>PP</Parallax>Y <br/>{' '}<Parallax
                speed={-0.5}>CO</Parallax><Parallax speed={0.4}>DING</Parallax> <Parallax speed={-0.4}>:)</Parallax>
            </p>

        </div>
    )
}
