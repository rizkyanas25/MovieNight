const moviesResponse = {
  data: {
    Search: [
      {
        Title: "One Piece: Wan pîsu",
        Year: "1999–",
        imdbID: "tt0388629",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "One Piece Film Z",
        Year: "2012",
        imdbID: "tt2375379",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWEyZTYzZDYtMzQ0Zi00MjMzLThjMWUtNzYyMzdiZDk0MzBiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "One Piece: Stampede",
        Year: "2019",
        imdbID: "tt9430698",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_SX300.jpg",
      },
      {
        Title: "One Piece Film: Gold",
        Year: "2016",
        imdbID: "tt5251328",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzBiMTlhNTAtNDc4Yi00M2FiLWE3ODMtNzgwNWI3ZGFhYjNkXkEyXkFqcGdeQXVyMjQ5NjMxNDA@._V1_SX300.jpg",
      },
      {
        Title: "One piece: Nejimaki shima no bôken",
        Year: "2001",
        imdbID: "tt0832449",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjAwMjk1NWQtMzY3ZS00Nzk1LWFmNTYtNDE5YjZiNGZjY2Q4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "One piece: Dead end no bôken",
        Year: "2003",
        imdbID: "tt1006926",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDExNjM1NmQtNjkxZi00N2Q5LWFjNjItOGVkMTUzNTFkYWVkXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_SX300.jpg",
      },
      {
        Title: "One piece: Omatsuri danshaku to himitsu no shima",
        Year: "2005",
        imdbID: "tt1018764",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWFiYjM4NGEtZGVlNi00MDQ4LWFjZjMtYmRiZjU0Zjc4NzRmXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_SX300.jpg",
      },
      {
        Title: "One piece: Norowareta seiken",
        Year: "2004",
        imdbID: "tt1010435",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWRkZjlkNzItZWRiOS00NDcwLTljNjQtODQxZjgyNDE4YzMyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title:
          "One Piece: Episode of Alabaster - Sabaku no Ojou to Kaizoku Tachi",
        Year: "2007",
        imdbID: "tt1037116",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDNiMzc2ZjctNTk0OC00NWU1LTk1MWItNGU2NjNkNjI0ZDc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "One piece: Chinjou shima no chopper oukoku",
        Year: "2002",
        imdbID: "tt0997084",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjM4ZmE1YzgtNGNlYi00Y2MzLTk0ZjAtZDhmMzBkMTQ0ZWZjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
    ],
    totalResults: "72",
    Response: "True",
  },
  status: 200,
  statusText: "",
  headers: {
    "cache-control": "public, max-age=86400",
    "content-type": "application/json; charset=utf-8",
    expires: "Fri, 05 Nov 2021 08:19:16 GMT",
    "last-modified": "Fri, 05 Nov 2021 07:19:16 GMT",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: { Accept: "application/json, text/plain, */*" },
    method: "get",
    url: "https://www.omdbapi.com/?apikey=39acf9b8&s=one piece",
  },
  request: {},
};

export {
  moviesResponse
}