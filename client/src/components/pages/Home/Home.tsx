import React, {useEffect, useState} from 'react';
import * as entitiesMoovie from "../../entity/movie.entity";
import ListMovie from '../../molecules/ListMovie';
type Props = {}

const fetchData = (page : number) => {
    let list : entitiesMoovie.IMoovieElem[] = [{
        name : "matrix",
        desc : "nice one",
        imgUrl : "..."
    }, {
        name : "matrix 2",
        desc : "nice one",
        imgUrl : "..."
    },{
        name : "matrix 3",
        desc : "nice one",
        imgUrl : "..."
    }];

    return list;
};

function Home({}: Props) {
const [listMoovie, setListMoovie] = useState<entitiesMoovie.IListMoovie>(entitiesMoovie.makeEmpty());

    useEffect(() => {
      setListMoovie(old => ({...old, moovies : fetchData(0)}));
    }, [])
    

  return (
    <section>
        <ListMovie
            listMovies={listMoovie.moovies}
            currentSelect={listMoovie.page}
        />
    </section>
  )
}

export default Home