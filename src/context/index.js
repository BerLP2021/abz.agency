import { useReducer } from "react";
import { DataTeamContext, DataTeamDispatchContext} from "./context";
import { initialTeamData } from "./initialTeamData";
import teamReducer from "./reducer";
import { useContext } from "react";

export const TeamDataProvider = ({children}) => {
    const [teamData, dispatch] = useReducer(
        teamReducer, 
        initialTeamData
    );
    return (
        <DataTeamContext.Provider value={teamData}>
            <DataTeamDispatchContext.Provider value={dispatch}>
                {children}
            </DataTeamDispatchContext.Provider>
        </DataTeamContext.Provider>    
    )
}

export function useDataTeamContext() {
    return useContext(DataTeamContext);
}
  
export function useDataTeamDispatchContext() {
    return useContext(DataTeamDispatchContext);
}