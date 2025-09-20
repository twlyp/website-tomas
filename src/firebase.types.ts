export type ItemContent = {
    title: string
    publication?: string
    location?: string
    date?: string
    urls?: string[]
    description?: string
}

export type ItemPhotos = ItemContent & {
    publication: string
    location: string
    date: string
    urls: string[]
}