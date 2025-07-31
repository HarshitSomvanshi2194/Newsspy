import React , {useReducer, useEffect} from 'react';
import reducer from './reducer';
//context creation
//provider
//consumer
//useContext hook
let API="https://hn.algolia.com/api/v1/search?";

const initialstate={
    isLoading: true,
    query : "CSS",
    page:0,
    nbPages:50,
    hits:[]
};

const AppContext = React.createContext();
//provider function
const AppProvider=({children})=>{

    // const [state, setstate] = useState(initialstate);
    const [state, dispatch]= useReducer(reducer, initialstate);

    
      const  fetchApiData = async (url)=>{

        dispatch({type: "SET_LOADING"});

        try{
          const res= await fetch(url);
          const data= await res.json();
          console.log(data);

          dispatch({type: "GET_STORIES", payload: {
            hits: data.hits,
            nbPages: data.nbPages
    }});
        }
          catch(error){
            console.log(error);
          }
        };

        // to remove the post
        const removePost=(ID)=>{
          dispatch({type: "REMOVE_POST" , payload: ID}); 
        }
      //to search post
      const searchPost=(query)=>{
        dispatch({type: "SEARCH_POST", payload: query});
      }
      //pagination
      const getNextPage=()=>{
        dispatch({type: "NEXT_PAGE"});
      
      };
      const getPrevPage=()=>{
        dispatch({type: "PREV_PAGE"});
      
      };
    
      useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
      }, [state.page, state.query]);
    

    return <AppContext.Provider value={{...state , removePost, searchPost , getNextPage, getPrevPage}}>{children}</AppContext.Provider>
};
//custom hook create
const useGlobalContext=()=>{
    return React.useContext(AppContext);
};
export {AppContext, AppProvider, useGlobalContext};