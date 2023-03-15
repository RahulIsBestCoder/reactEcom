const MessageReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
  
    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
  
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === true;
        });
  
        return {
          ...state,
          isLoading: false,
          messages: action.payload,
          featureMessages: featureData,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT":
        return {
          ...state,
          isSingleLoading: false,
          singleMessage: action.payload,
        };
  
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default MessageReducer;
  