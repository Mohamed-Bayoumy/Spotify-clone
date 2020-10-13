export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirect = 'http://localhost:3000/';

const client_ID = "0904f597ef814672a64fc668b3cb41d5"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const loginUrl = `${authEndpoint}?client_id=${client_ID}&redirect_uri=${redirect}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
export const getTokenFromUrl = () => {
    return window.location.hash.subscribe(1).split("&").reduce((initial, item) => {
        const parts = item.split('=')
        initial[parts[0]] = decodeURIComponent[parts[1]];

        return initial

    }, {}
    )
}