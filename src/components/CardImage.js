import './../css/CardImage.css';
import NFT from './../images/NFT.jpg';

function CardImage() {
    return(
        <div className='image-container'>
            <img src={NFT} alt='' />
            <div className='overlay-container'>
                <i class="fa-solid fa-eye"></i>
            </div>
        </div>
    );
}

export default CardImage