import {useLenis} from "@studio-freight/react-lenis";
import {useState} from "react";

export default function ScrollProgress() {

    const [progress, setProgress] = useState(0)

    useLenis(({progress}) => {
        setProgress(progress)
    })

    return <div style={{
        right: (1 - progress) * 100 + '%'
    }} className={'fixed top-0 h-2 left-0 bg-rose-500'}></div>

}