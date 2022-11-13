import { readable, writable, type Readable, type Subscriber, type Writable } from "svelte/store";
import type { socialIcon } from "$lib/data/core-types"

const iconsData:socialIcon[] = [
    {
        name:"Github",
        href:"https://github.com/chrisvail",
        icon:"github"
    },
    {
        name:"LinkedIn",
        href:"https://www.linkedin.com/chris-vail",
        icon:"linkedin"
    },
    {
        name:"Email",
        href:"mailto: christopher.n.vail@gmail.com",
        icon:"mail"
    },
]

export const icons:Readable<socialIcon[]> = readable(iconsData, function start(_:Subscriber<any>) {
    return function stop() {return null}
})

export const dark:Writable<boolean> = writable(true)