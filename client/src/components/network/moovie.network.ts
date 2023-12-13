import networkGen from "./network.gen";

let url = `https://api.themoviedb.org/3/movie/changes`

export const fetchMovies = (page : number) => {
    // encode url
    let _url = `${url}?pages=${page}`;

    fetch(_url)
};
