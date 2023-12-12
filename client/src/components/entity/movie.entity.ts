export interface IMoovieElem {
    name : string;
    desc : string;
    imgUrl : string
};

export interface IListMoovie {
    moovies : IMoovieElem[];
    page : number;
};

export const makeEmpty = () : IListMoovie => ({
    moovies : [],
    page : 0
});