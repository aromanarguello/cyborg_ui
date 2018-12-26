import { OrderContent } from '../../../utils/TypeMaps/Types'

export interface ItemProp {
    index: number
}
export interface StyledProps {
    isComplete?: boolean
}

export interface State {
    orders: OrderContent[]
}
