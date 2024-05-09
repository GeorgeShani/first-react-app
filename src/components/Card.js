import './../css/Card.css';
import CardImage from './CardImage';
import CardInfo from './CardInfo'
import CardAuthor from './CardAuthor';

function Card() {
    return(
        <div className='NFT-Card'>
            <CardImage />
            <CardInfo />
            <CardAuthor />
        </div>
    );
}

export default Card