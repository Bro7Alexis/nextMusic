import { PlayIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { Context } from '../../context'
import { Songs } from '../player/songs'

const Playlist = () => {
    const {state,dispatch} = useContext(Context);
    
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
                        
                        </tr>
                      </thead>
                      <tbody >
                        {Songs.map((song,index) => (
                          <tr className="song-list-table" key={song.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center m-auto text-sm font-medium ">
                              <>
                                <PlayIcon
                                  onClick={() => dispatch({type:"CHANGE_SONG", payload:song})}
                                className="cursor-pointer h-5 mx-auto play-song-icon"
                                  />
                                <span className="play-song-incr-number">{index+1}</span>
                              </>
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium ">
                              <>
                                {song.artist}
                              </>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.title}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.time}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.album}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Playlist