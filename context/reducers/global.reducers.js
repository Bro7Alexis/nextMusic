export function global(state, action) {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return { ...state, user: action.payload, logged:true };
      case "CHANGE_DARK":
        return { ...state, darkMode: action.payload };
      
      case "CHANGE_VOLUME":
        return { ...state, volume: action.payload};
      
      case "CHANGE_SONG":
        return { ...state, inPlay: action.payload};

        case "ADD_TO_FAV":
          return { ...state, favoris: [...state.favoris, action.payload]};

        case "REMOVE_FROM_FAV":
          return { ...state, favoris: state.favoris.filter((el) => el.id != action.payload)};
      default:
        return state;
    }
  }
