import React,{useEffect} from 'react';
import Login from './login'
import { getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import {UseStateContext } from './stateHandler';


const spotify = new SpotifyWebApi();
function App() {

const [{user,token},dispatch]=UseStateContext();
  useEffect(() => {
   const hash = getTokenFromUrl();
   window.location.hash="";
const _token=hash.access_token;
if(_token)
{
  dispatch({
    type:'SET_TOKEN',
    token:_token
  })
spotify.setAccessToken(_token);
spotify.getMe().then((user)=>
{
dispatch({
  type:'SET_USER',
  user:user,
});
})
}
spotify.getUserPlaylists().then((playlists)=>
{
  dispatch({
    type:"SET_PLAYLISTS",
    playlists:playlists
  })
});
console.log(token)
  }, [])

  return (
    <div className="App">
      {token ? (<Player spotify={spotify}/>):( <Login/>)}
    </div>
  );
}

export default App;
