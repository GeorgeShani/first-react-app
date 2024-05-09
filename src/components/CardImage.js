import './../css/CardImage.css';

function CardImage() {
    return(
        <div className='image-container'>
            <img src='./images/NFT.jpg' alt='' />
            <div className='overlay-container'>
                <i class="fa-solid fa-eye"></i>
            </div>
        </div>
    );
}

export default CardImage