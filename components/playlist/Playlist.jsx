import { HeartIcon, PlayIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { Context } from '../../context'
import { Songs } from '../player/songs'

const Playlist = () => {
    const {state,dispatch} = useContext(Context);

    const addToFav = (item) => {
        if(state.favoris.find((el) => el.id == item.id)){
            return dispatch({type:"REMOVE_FROM_FAV", payload:item.id});
        }

        return dispatch({type:"ADD_TO_FAV", payload:item});
    }

    const playSong = (item) => {
        dispatch({type:"CHANGE_SONG", payload:item});
    }

  return (
    <>
                    <h1 className="text-3xl font-bold">My Playlist</h1>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 overflow-x-auto -mx-6">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="">
                        <tr>
                          <th scope="col" className="relative py-3 pl-4 pr-3 sm:pr-6">
                            <span className="">#</span>
                          </th>
                          <th
                            scope="col"
                            className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide  sm:pl-6"
                          >
                            Artist
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Album
                          </th>
                        
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Like</span>
                        </th>
                        </tr>
                      </thead>
                      <tbody >
                        {Songs.map((song,index) => {
                          return <SongsList playSong={playSong} key={song.id} addToFav={addToFav} index={index+1} favoris={state.favoris} item={song} />
                        }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

const SongsList = ({item,favoris, index, addToFav, playSong}) => {

    const isFav = favoris.find((el) => el.id == item.id);

    return (<>
                <tr className="song-list-table" key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center m-auto text-sm font-medium ">
                    <>
                        <PlayIcon
                        onClick={() => playSong(item)}
                        className="cursor-pointer h-5 mx-auto play-song-icon"
                        />
                        <span className="play-song-incr-number">{index}</span>
                    </>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium ">
                    <>
                     <img alt={item.artist} src={item.artistPhoto} className="inline-block h-8 w-8 rounded-full mr-2 object-cover" />
                     {item.artist}
                    </>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.time}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.album}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        <HeartIcon onClick={() => addToFav(item)} style={{transition:"all ease 0.3s"}} 
                        className={`${isFav && 'text-red-500'} cursor-pointer hover:text-white h-5`}
                        />
                    </td>
                </tr>
            </>)
}

export default Playlist