const dec2hex = (a: number): string => {
    return Math.abs(a).toString(16)
}

export const randBet = (min:number, max:number): number => {
    return Math.floor(Math.random() * (max - min) + min)
}

export const getColor = (type: string): string => {
    let color = ''
    type.split("").forEach(e => color += dec2hex(randBet(1, 256)));
    return color.toString()
}