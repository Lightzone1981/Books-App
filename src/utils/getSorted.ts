import { IBookCard } from '../types';

const getNumber = (str:string) => Number(str.substring(1))

const getSorted = (booksArr:IBookCard[], sortParam:string, sortType:string) => {

    switch (sortParam){
        case 'Sort by Title': {
            if (sortType === 'asc')
                return booksArr.sort((a: IBookCard, b: IBookCard) => a.title < b.title ? 1 : -1)
            else
                return booksArr.sort((a: IBookCard, b: IBookCard) => a.title > b.title ? 1 : -1)
        }
        case 'Sort by Price':{
            if (sortType === 'asc')
                return booksArr.sort((a: IBookCard, b: IBookCard) => getNumber(a.price) > getNumber(b.price) ? 1 : -1)
            else
                return booksArr.sort((a: IBookCard, b: IBookCard) =>  getNumber(a.price) < getNumber(b.price) ? 1 : -1)
        }
    }
    return []
}

export default getSorted
