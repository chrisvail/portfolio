export type Image = {
    src:string,
    alt:string
}

export type socialIcon = {
    name:string,
    href:string,
    icon:string
}

export type Component = {
    component:string,
    props:Record<string, unknown>
}


export type Project = {
    title: string,
    summary:string,
    featuredImage:Image,
    slug:string,
    startDate:string,
    endDate:string,
    tags:[string],
    contributors:[string],
}