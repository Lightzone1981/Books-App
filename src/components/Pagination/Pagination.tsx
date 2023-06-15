
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState, IPagination } from '../../types';
import { useEffect } from 'react';
import './Pagination.css'
import { setPaginationItem } from '../../redux/action-creators';

        const Pagination = ({activeItem,	allPostsCount,	callback, dotsCallback}: IPagination) => {
                const itemsCount = Math.ceil(allPostsCount / 10)
            
                let itemsArr: string[] = [];
            
                let tripletNum =
                    activeItem % 3
                        ? Math.floor(activeItem / 3) + 1
                        : Math.floor(activeItem / 3);
                if (activeItem === itemsCount && activeItem === tripletNum * 3 + 1)
                    tripletNum = Math.floor(activeItem / 3);
            
                const startIndex = tripletNum * 3 - 2;
                if (tripletNum > 1) itemsArr = itemsArr.concat(["1", "..."]);
                let i = startIndex;
                while (i < startIndex + 4 && i <= itemsCount) {
                    itemsArr.push(String(i));
                    i++;
                }
            
                if (i === itemsCount) {
                    itemsArr.push(String(i));
                }
            
                if (i < itemsCount) itemsArr = itemsArr.concat(["...", String(itemsCount)]);
            
                const linksList = itemsArr.map((el: string, index: number, arr: string[]) => {
                    return el === "..." ? (
                        <li
                            key={`${index}`}
                            className="pagination__item pagination__dots"
                            id={`dots-${index}`}
                            onClick={(e) => dotsCallback(e, startIndex)}>
                            {el}
                        </li>
                    ) : (
                        <li
                            key={`${index}`}
                            className="pagination__item"
                            id={`item-${el}`}
                            data-active={el === String(activeItem) ? "true" : "false"}
                            onClick={(e) => callback(e)}>
                            {el}
                        </li>
                    );
                });
            
                return (
                    <section className="pagination" >
                        
                        <ul className="pagination__list">{linksList}</ul>
                       
                    </section>
                );
            };
export default Pagination 