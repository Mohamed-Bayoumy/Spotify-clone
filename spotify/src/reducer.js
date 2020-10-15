export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:"BQB82nE7wEFpBcqVdqkZ2_W6BYcMgGtInKJSJqGYkqnuP-FEFAW5THKUgOezl3cjoNvlRv4eayn2zrnrx7qNmd4I-wEbfnymupIIr90anhnDE_1ZuD6Cm29OOOtlApBJtXKg3B5uR8vRVxAkSuI4VUXAS-ThXJmc2A"
}
const reducer = (state,action)=>
{

switch(action.type)
{
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token,
        }
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
        case 'SET_PLAYLISTS':
            return{
              ...state,
            playlists:action.playlists
            }
        default:
            return state;
}
}
export default reducer;