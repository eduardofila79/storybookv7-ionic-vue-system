export type CardInfo = {
    id: number
    title: string
    description: string
    buttonLabel?: string | undefined
    rating?: number | undefined
    reviews?: number | undefined
    descriptionCharacters: number
    iconButtons: CircleButtonInfo[]

}

export type CircleButtonInfo = {
    icon: string
}