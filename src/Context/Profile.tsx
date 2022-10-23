import { createContext } from "react";

import { GetName } from "../customFuncs/Names";
import { randBet } from "../customFuncs/Colors";

export const ProfileContext = createContext({name: '', profilePic: ''})

export const ProfileProvider = ({ children }: { children: any }) => {

    const name = GetName(randBet(0, 10000))
    const profilePic = `https://avatars.dicebear.com/api/adventurer-neutral/${Math.random()}.svg`

    return (
        <ProfileContext.Provider value={{name, profilePic}}>
            {children}
        </ProfileContext.Provider>
    )
}