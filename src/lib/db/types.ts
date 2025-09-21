export type ContentItem = {
    title: string
    publication?: string
    location?: string
    date?: string
    urls?: string[]
    description?: string
}

export type PhotoItem = ContentItem & {
    publication: string
    location: string
    date: string
    urls: string[]
}

export type WithId<T> = T & { id: string }