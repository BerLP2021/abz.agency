const teamReducer = (state, action) => {
    switch (action.type) {
        case 'add': 
          return {
            teamData: {
              ...action.teamData, 
              users: [...state.teamData.users, ...action.teamData.users]
            },
            remoteUpdate: state.remoteUpdate
          };
        
        case 'update': 
          return {
            // ...state,
            teamData: {
              ...action.teamData
            },
            remoteUpdate: state.remoteUpdate
          };
        
        case 'remote': 
          return {
            ...state,
            remoteUpdate: state.remoteUpdate + 1
          }
        
        default: 
          throw Error('Unknown action: ' + action.type);
        
    }
}

export default teamReducer