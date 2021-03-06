import {createContext} from 'react';

export const PAUSE_SONG = "PAUSE_SONG"
export const PLAY_SONG = "PLAY_SONG"
export const SET_SONG = "SET_SONG"

export const SongContext = createContext({
    song:{
    id: "4c345041-4611-4928-98a3-fb82511fb383",
    title: "Alesso - Take My Breath Away (Lyric Video)",
    artist: "Alesso",
    thumbnail : "http://img.youtube.com/vi/o10EV4PG40U/0.jpg",
    url: "https://youtu.be/o10EV4PG40U",
    duration: 191,
    },
    isPlaying: false
  });


function SongReducer(state, action){
    switch(action.type){
        case PAUSE_SONG:{
            return {
                ...state,
                isPlaying:false
            }
        }
        case PLAY_SONG:{
            return {
                ...state,
                isPlaying:true
            }
        }
        case SET_SONG:{
            return {
                ...state,
                song: action.payload.song
            }
        }
        default:
            return state
    }

}

export default SongReducer