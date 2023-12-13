import networkGen from "./network.gen";

const url = `https://api.themoviedb.org/3/movie/changes`

export const fetchMovies = (page : number) => {
    // encode url
    const _url = `${url}?pages=${page}`;

    fetch(_url)
};
