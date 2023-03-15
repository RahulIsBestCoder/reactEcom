import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/message.reducer";

const AppContext = createContext();

const API = "http://localhost:3001/api/v1/data";
 
const initialState = {
  isLoading: false,
  isError: false,
  messages: [],
  featureMessages: [],
  isSingleLoading: false,
  singleMessage: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getMessages = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const messages = await res.data;
      dispatch({ type: "SET_API_DATA", payload: messages });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single message

  const getSingleMessage = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      {console.log(res)}
      const singleMessage = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleMessage });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getMessages(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleMessage }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useMessageContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useMessageContext };
