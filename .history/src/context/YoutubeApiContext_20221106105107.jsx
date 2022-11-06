import { createContext } from "react";

export const YoutubeApiContext = createContext();

export const 

export function YoutubeApiProvider({ children }) {
	return <YoutubeApiContext.Provider value={ youtube}>children</YoutubeApiContext.Provider>
}