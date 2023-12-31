import './globals.css'
import type {Metadata} from 'next'
import {Dela_Gothic_One, Prompt} from 'next/font/google'
import PageWrapper from "@/components/PageWrapper";
import TransitionLink from "@/components/TransitionLink";
import Menu from "@/components/Menu";
import Link from "next/link";

const delaGothicOne = Dela_Gothic_One({
    subsets: ['latin'], weight: ['400'],
    variable: '--font-gothic'
})
const prompt = Prompt({
    subsets: ['latin'], weight: ['400', '500', '600', '700'],
    variable: '--font-prompt'
})

export const metadata: Metadata = {
    title: 'STAATO Template',
    description: 'Starter Template for animation based websites',
}

export default function RootLayout({children,}:
                                       {
                                           children: React.ReactNode
                                       }) {
    return (
        <html lang="en">
        <body className={`${delaGothicOne.variable} ${prompt.variable} font-sans`}>
        <div className="fixed inset-x-0 top-0 h-screen bg-gradient-to-b from-transparent via-transparent to-rose-950 pointer-events-none mix-blend-plus-lighter"/>
        <PageWrapper>
            <main>


                <nav className={'text fixed inset-x-0 py-8 text-2xl z-[999]'}>

                    <div className="flex px-12 items-center gap-2">
                        <TransitionLink href={'/'} className={'mr-auto'}>
                            Home
                        </TransitionLink>

                        <Link href={'https://github.com/to-fuu/staato'} target={'_blank'} rel={'noreferrer noopener'} className={''}>
                            Github
                        </Link>

                        <Menu/>

                    </div>

                </nav>

                {children}
            </main>
        </PageWrapper>

        </body>
        </html>
    )
}
