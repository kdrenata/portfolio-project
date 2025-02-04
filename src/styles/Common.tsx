import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}


export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    lineHeight: ${lineHeight || 1.2};
    font-size: calc( (100vw - 375px)/(1920 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px );
    
`
