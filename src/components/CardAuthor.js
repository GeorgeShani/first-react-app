import './../css/CardAuthor.css';

function CardAuthor() {
    const authorName = "Jules Wyvern";

    return(
        <div className='author-info'>
            <img src='./images/Author.png' alt='' />
            <p className='nft-author-credit'>
                Creation of <span className='author-name'>{ authorName }</span>
            </p>
        </div>
    );
}

export default CardAuthor