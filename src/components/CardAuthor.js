import './../css/CardAuthor.css';
import Author from './../images/Author.png';

function CardAuthor() {
    return(
        <div className='author-info'>
            <img src={Author} alt='' />
            <p className='nft-author-credit'>
                Creation of <span className='author-name'>Jules Wyvern</span>
            </p>
        </div>
    );
}

export default CardAuthor