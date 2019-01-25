export type DataObject = {
    x: string
    y: number
}

export type DataProp = {
    id: string
    data: DataObject[]
}

export type State = {
    data: DataProp[]
}
