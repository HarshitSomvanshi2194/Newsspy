const reducer=(state, action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "GET_STORIES":
        return{
        ...state,
        isLoading:false,
        hits:action.payload.hits,
        nbpages:action.payload.nbPages,
    };
    case "REMOVE_POST":
        return{
            ...state,
            hits:state.hits.filter((curElem)=>curElem.objectID !== action.payload),
        };
    case "SEARCH_POST":
        return{
            ...state,
            query:action.payload,
            page:0,
        };
    case "NEXT_PAGE":
        let pages= state.page+1;
        if(pages>=state.nbPages){
            pages=0;
        }
        return {
            ...state,
            page:pages,
        }
    case "PREV_PAGE":
        let pageNum= state.page;

        if(pageNum<=0){
            pageNum=0;
        }
        else{
            pageNum=pageNum-1;
        }
        return {
            ...state,
            page:state.page-1,
        }
        default:
        return state;
}
};
export default reducer;