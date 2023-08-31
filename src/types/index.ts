export type CardInfo = {
    id: number
    title: string
    description: string
    buttonLabel?: string
    rating?: number
    reviews?: number
    descriptionCharacters: number
    iconButtons: CircleButtonInfo[]

}

export type CircleButtonInfo = {
    icon: string
}