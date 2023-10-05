import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const initParallax = () => {

    const all = gsap.utils.toArray('[data-scroll]')

    all.forEach((item) => {
        const el = item as HTMLElement
        const direction = el.dataset['scroll'] as 'vertical' | 'horizontal'
        const speed = Number.parseFloat(el.dataset['speed'] || '0')
        const fade = el.dataset['fade'] === 'true'
        const opacityOffset = Number.parseFloat(el.dataset['opacityOffset'] || '0')


        gsap.to(el, {
            scrollTrigger: {
                scrub: 0.5,
                trigger: el,
                start: 'top ' + el.offsetTop,
            },
            y: () => direction === 'horizontal' ? 0 : (-ScrollTrigger.maxScroll(window)) * speed / 10,
            x: () => direction === 'vertical' ? 0 : (-ScrollTrigger.maxScroll(window)) * speed / 10,

        });
        fade && gsap.to(el, {
            scrollTrigger: {
                scrub: 0.5,
                trigger: el,
                start: 'top ' + (el.offsetTop * speed - opacityOffset),
            },
            opacity: 0,
        });

    })

}