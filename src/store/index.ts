import { createContext } from "react";
import { RootState } from "../model";


export const initState : RootState = {
    nums : 0
};

export const Context = createContext({} as any);

export const ContextProvider = Context.Provider;