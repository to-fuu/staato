import './globals.css'
import type {Metadata} from 'next'


export const metadata: Metadata = {
    title: 'Another page | STAATO Template',
    description: 'Another page because why not.',
}

export default function RootLayout({children,}:
                                       {
                                           children: React.ReactNode
                                       }) {
    return children
}
