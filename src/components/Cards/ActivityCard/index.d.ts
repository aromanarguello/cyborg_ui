export interface DataObject {
    x: string
    y: number
}

export interface DataProp {
    id: string
    data: DataObject[]
}

export interface State {
    data: DataProp[]
}
