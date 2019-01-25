import { OrderContent } from '../../../utils/TypeMaps/Types'

export type ItemProp = {
    index: number
}
export type StyledProps = {
    isComplete?: boolean
}

export type State = {
    orders: OrderContent[]
}
