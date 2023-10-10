const teamReducer = (state, action) => {
    switch (action.type) {
        case 'add': 
          return {
            teamData: {
              ...action.teamData, 
              users: [...state.teamData.users, ...action.teamData.users]
            },
            remoteUpdate: state.remoteUpdate,
            userName: state.userName
          };
        
        case 'update': 
          return {
            // ...state,
            teamData: {
              ...action.teamData
            },
            remoteUpdate: state.remoteUpdate,
            userName: state.userName
          };
        
        case 'remote': 
          return {
            ...state,
            remoteUpdate: state.remoteUpdate + 1
          }
        case 'select': 
          return {
            ...state,
            userName: action.userName
          }
        default: 
          throw Error('Unknown action: ' + action.type);
        
    }
}

export default teamReducer