import data from './Names.json'

type Name = {
    id: number,
    name: string
}

type Names = Name[]

const name_list: Names = data as Names

export const GetName = (id: number): string => {
    return name_list[id].name
}