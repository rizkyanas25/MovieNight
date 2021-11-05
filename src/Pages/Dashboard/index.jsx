import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyledDashboard } from './style';

import { Images } from '../../Constants';
import * as movieActions from '../../Store/Movies/actions';

function Dashboard(props) {

  // MAPSTATE
  const moviesData = useSelector(state => state.movies);

  // MAPDISPATCH
  const dispatch = useDispatch();
  const getMovies =  dispatch(movieActions.getMovies);

  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isFetchMore, setIsFetchMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchAgain, setSearchAgain] = useState(false);

  useEffect(() => {
    if (searchKeyword) {
      setIsLoading(true);
      setShowSuggestion(false);
      setAllMovies([]);
      searchMovies(searchKeyword);
    } else if (searchKeyword === '') {
      setMovies([]);
      setAllMovies([]);
    }
  }, [searchKeyword])

  useEffect(() => {
    if (inputText !== '') {
      if (searchAgain) {
        searchSuggestion(inputText)
      }
    } else {
      setSuggestions([])
    }
  }, [inputText])

  useEffect(() => {
    if (movies.length > 0) {
      setAllMovies([...allMovies, ...movies])
      setIsFetchMore(false);
    }
  }, [movies])

  const searchMovies = (keyword, page) => {
    getMovies({
      search: keyword,
      page: page || null
    })
    .then((res) => {
      let data = res.payload.data;
      setMovies(data.Search);
      setTotalResults(data.totalResults)
      setIsLoading(false)
    })
    .catch((err => {
      alert('Something error happened')
    }))
  }

  const searchSuggestion = (keyword) => {
    getMovies({
      search: keyword,
    })
      .then((res) => {
        let data = res.payload.data;
        let temp = []
        data.Search.forEach(el => {
          temp.push(el.Title)
        })
        setSuggestions(temp);
        setShowSuggestion(true)
      })
      .catch((err => {
        console.log(`err`, err)
      }))
  }

  const chooseSuggestion = word => {
    setInputText(word)
    setSearchKeyword(word);
    setShowSuggestion(false);
    setSearchAgain(false);
  }

  const loadMore = () => {
    if (allMovies.length  < totalResults) {
      setIsFetchMore(true)
      searchMovies(searchKeyword, page+1);
      setPage(page+1)
    }
    
  }

  const handleLoadMore = event => {
    const target = event.target;
    let totalScroll = Math.ceil(target.scrollHeight - target.scrollTop);
    if (totalScroll === target.clientHeight) {
      loadMore()
    }
  };

  const clear = () => {
    setInputText('');
    setSearchKeyword('');
    setShowSuggestion(false);
    setMovies([]);
    setAllMovies([]);
  }

  const goToDetail = id => {
    props.history.push(`/movies/${id}`)
  }

  return (
    <StyledDashboard>
      <div className="container">
        <div className="content">
          <form data-testid="search-form" className='movieForm' onSubmit={(e) => {e.preventDefault(); setSearchKeyword(inputText)}}>
            <input
              data-testid="search-input"
              value={inputText}
              onChange={e => {setSearchAgain(true); setInputText(e.target.value)}}
              type="text"
              placeholder='Search your desired movie...'
            />
            {
              inputText !== '' &&
              <img
                src={Images.close}
                alt=""
                className="close"
                onClick={clear}
              />
            }
            {
              showSuggestion &&
              <div data-testid='suggestions' className="suggestions">
                {
                  suggestions.map(word => {
                    return (
                      <p key={word} onClick={() => chooseSuggestion(word)}>{word}</p>
                    )
                  })
                }
              </div>
            }
          </form>
          <div onScroll={handleLoadMore} className="movies-wrapper">
            {
              !isLoading && allMovies.map((movie, idx) => {
                return (
                  <div data-testid={`movie-item-${idx}`} key={idx} onClick={() => goToDetail(movie.imdbID)} className="movie-card">
                    {/* {JSON.stringify(movie)} */}
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="info">
                      <p className='title'>{movie.Title}</p>
                      <p className='year'>{movie.Year}</p>
                    </div>
                    <p className='type'>{movie.Type}</p>
                  </div>
                )
              })
            }
            {
              isFetchMore || isLoading &&
              <div className="loadMore">
                <img src={Images.loading} alt="" />
              </div>
            }
          </div>
        </div>
      </div>
    </StyledDashboard>
  )
}

export default Dashboard;
