import React from 'react'
import Movie from "../atoms/Movie";
import * as entitiesMovie from "../entity/movie.entity";//"./../../entity/moovie.entity";

type Props = {
    listMovies : entitiesMovie.IMoovieElem[],
    currentSelect : number;
}

function ListMovie(props: Props) {
  return (
    <div>
        {
            props.listMovies.map(moovie => <Movie
                key={`movie-${moovie.name}`}
                movie={moovie}    
            />)
        }
    </div>
  )
}

export default ListMovie