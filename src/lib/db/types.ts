export type StorageItem = {
    path: string
    url: string
}

export type ContentItem = {
    title: string
    publication?: string
    location?: string
    date?: string
    assets?: StorageItem[]
    description?: string
}

export type PhotoItem = ContentItem & {
    publication: string
    location: string
    date: string
    assets: StorageItem[]
}

export type WithId<T> = T & { id: string }