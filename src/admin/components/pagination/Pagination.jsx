import { use } from 'i18next';
import React, {useEffect, useState} from 'react';

const Pagination = ({links, handlePagination}) => {

    // hideShow nextPrevious Buttons
    const [nextButton, setNextButton] = useState(true);
    const [prevButton, setPrevButton] = useState(true);

    let currentPage = (parseInt(links.find(link => link.active).label))
    let linksLength = links.length - 2;

    useEffect(() => {
        if(currentPage == 1){
            setPrevButton(false);
        }
        
    }, []);

    const nextPrevPage = (page) => {
        
        console.log(currentPage, 'old page')
        // console.log(linksLength, 'length')

        if(page == 'next' || page == 'prev'){
            if(page == 'prev'){
                if(currentPage > 1){
                    currentPage = currentPage - 1;
                    handlePagination(currentPage);
                }
                
            }else if(page == 'next'){
                if(currentPage < linksLength){
                    currentPage = currentPage + 1;
                    handlePagination(currentPage);
                }
            }
        }else if(page != 'next' && page != 'prev'){
            page = parseInt(page);
            currentPage = page;
            handlePagination(page);
        }

        if(currentPage == 1){
            console.log(currentPage, 'prev---Page ')
            setPrevButton(false);
            setNextButton(true);

        }else if(currentPage == linksLength){
            console.log(currentPage, 'next---Page ')
            setNextButton(false);
            setPrevButton(true);
            
        }else{
            console.log(currentPage, 'NextPrev---Page ')
            setNextButton(true);
            setPrevButton(true);
        }

        // console.log(currentPage, 'current page '); 
        // console.log(currentPage+1, 'next page '); 

    }
    
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mt-4">
                    <li className="page-item" hidden={!prevButton}>
                        <a className="page-link cursor" onClick={() => nextPrevPage('prev')}>
                            {/* prev */}
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.92541 0.558058C7.19153 0.802136 7.19153 1.19786 6.92541 1.44194L2.4375 5.55806C2.17138 5.80214 2.17138 6.19786 2.4375 6.44194L6.92541 10.5581C7.19153 10.8021 7.19153 11.1979 6.92541 11.4419C6.65928 11.686 6.22781 11.686 5.96169 11.4419L1.47378 7.32583C0.675408 6.59359 0.675406 5.40641 1.47378 4.67418L5.96169 0.558058C6.22781 0.313981 6.65928 0.313981 6.92541 0.558058Z" fill="#1C1C1C"/>
                            </svg>
                        </a>
                    </li>
                    <li className="page-item" hidden={prevButton}>
                        <a className="page-link bg-primary-light">
                            {/* prev */}
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.92541 0.558058C7.19153 0.802136 7.19153 1.19786 6.92541 1.44194L2.4375 5.55806C2.17138 5.80214 2.17138 6.19786 2.4375 6.44194L6.92541 10.5581C7.19153 10.8021 7.19153 11.1979 6.92541 11.4419C6.65928 11.686 6.22781 11.686 5.96169 11.4419L1.47378 7.32583C0.675408 6.59359 0.675406 5.40641 1.47378 4.67418L5.96169 0.558058C6.22781 0.313981 6.65928 0.313981 6.92541 0.558058Z" fill="#1C1C1C"/>
                            </svg>
                        </a>
                    </li>
                    {
                        links.map((link, index) => (
                            <li className={`page-item ${link.active ? 'active' : ''}`} key={index} hidden={index == 0 || links.length == (index + 1) }>
                                <a className="page-link cursor" onClick={() => nextPrevPage(link.label)}
                                    dangerouslySetInnerHTML={{ __html: link.label }}>
                                </a>
                            </li>
                        ))
                    }
                    <li className="page-item" hidden={!nextButton}>
                        <a className="page-link cursor" onClick={() => nextPrevPage('next')}>
                            {/* next */}
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.07459 11.4419C0.808469 11.1979 0.808469 10.8021 1.07459 10.5581L5.5625 6.44194C5.82863 6.19786 5.82863 5.80214 5.5625 5.55806L1.07459 1.44194C0.80847 1.19786 0.80847 0.802137 1.07459 0.558058C1.34072 0.313981 1.77219 0.313981 2.03831 0.558058L6.52622 4.67418C7.32459 5.40641 7.32459 6.59359 6.52622 7.32582L2.03831 11.4419C1.77219 11.686 1.34072 11.686 1.07459 11.4419Z" fill="#1C1C1C"/>
                            </svg>
                        </a>
                    </li>
                    <li className="page-item" hidden={nextButton}>
                        <a className="page-link bg-primary-light">
                            {/* next */}
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.07459 11.4419C0.808469 11.1979 0.808469 10.8021 1.07459 10.5581L5.5625 6.44194C5.82863 6.19786 5.82863 5.80214 5.5625 5.55806L1.07459 1.44194C0.80847 1.19786 0.80847 0.802137 1.07459 0.558058C1.34072 0.313981 1.77219 0.313981 2.03831 0.558058L6.52622 4.67418C7.32459 5.40641 7.32459 6.59359 6.52622 7.32582L2.03831 11.4419C1.77219 11.686 1.34072 11.686 1.07459 11.4419Z" fill="#1C1C1C"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
