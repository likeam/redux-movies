import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKEY } from '../../common/apis/MoviApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'


const Home = () => {

  const dispatch = useDispatch()
   const moviText = 'Harry'

  useEffect(() =>{    

   
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIKEY}&s=${moviText}&type=movie`)
      .catch((err) => {
        console.log("Error:", err)
      })
      dispatch(addMovies(response.data))
      console.log(response.data)
    }

    fetchMovies();
  }, [])

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}

export default Home