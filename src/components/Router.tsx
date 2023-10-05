import {ReactNode} from "react";

export default function Router({children}: { children?: ReactNode }) {

    return <>
        {children}
    </>

}