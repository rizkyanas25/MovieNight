import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { StyledMovieDetail, StyledModal } from './style';

import { Images } from '../../Constants';
import * as movieActions from '../../Store/Movies/actions';


function MovieDetail(props) {

  const { id } = useParams()

  // MAPSTATE
  const moviesData = useSelector(state => state.movies);

  // MAPDISPATCH
  const dispatch = useDispatch();
  const getMovie = dispatch(movieActions.getMovie);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataKey, setDataKey] = useState([]);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    searchMovie(id)
  }, [])

  useEffect(() => {
  }, [dataKey])

  const searchMovie = (id) => {
    getMovie({
      id: id,
    })
      .then((res) => {
        let data = res.payload.data;
        setMovie(data);
        let keys = Object.keys(data);
        let filteredKeys = []
        keys.forEach(el => {
          if (
            el !== 'Poster' &&
            el !== 'imdbRating' &&
            el !== 'imdbVotes' &&
            el !== 'Title' &&
            el !== 'Year' &&
            el !== 'Type' &&
            el !== 'Plot' &&
            el !== 'Ratings' &&
            el !== 'imdbID' &&
            el !== 'Response' &&
            typeof el === 'string'
          ) {
            filteredKeys.push(el)
          }
        })
        setDataKey(filteredKeys)
        setLoading(false)
      })
      .catch((err => {
        alert('Something error happened')
      }))
  }

  return (
    <StyledMovieDetail>
      <div className="container">
        <div className="content">
          <img className='back' onClick={() => props.history.goBack()} src={Images.back} alt="" />
          {
            loading &&
            <div className="loading">
              <img src={Images.loadingDark} alt="" />
            </div>
          }
          {
            !loading && movie && 
            <div className="movie">
              <div className="left">
                <img onClick={() => setOpenModal(true)} src={movie.Poster} alt="" className="poster" />
                <div className="imdb">
                  <img src={Images.imdb} alt="" />
                  {movie.imdbRating} / {movie.imdbVotes} votes
                </div>
              </div>
              <div className="right">
                <div className="info">
                  <p className="title">{movie.Title}</p>
                  <p className="year">{movie.Year}</p>
                  <p className="type">{movie.Type}</p>
                </div>
                <div className="plot">
                  "{movie.Plot}"
                </div>
                <div className="detail">
                  {
                    dataKey.map(key => {
                      return (
                        <p key="key" className="item">
                          <span className="key">{key}: </span>
                          {movie[key]}
                        </p>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          }
        </div>
      </div>
      {
        openModal &&
        <StyledModal>
          <img onClick={() => setOpenModal(false)} src={Images.closeLight} alt="" className="close" />
          <div className="img-wrapper">
            <img src={movie.Poster} alt="" />
          </div>
        </StyledModal>
      }
    </StyledMovieDetail>
  )
}

export default MovieDetail;
