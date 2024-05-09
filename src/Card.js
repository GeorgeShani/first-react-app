import './Card.css';
import NFT from './NFT.jpg';
import Author from './Author.png';

function Card() {
    return(
        <div className='NFT-Card'>
            <div className='image-container'>
                <img src={NFT} />
                <div className='overlay-container'>
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
            <div className='info-container'>
                <p className='nft-title'>Equilibrium #3429</p>
                <p className='nft-description'>
                    Our Equilibrium collection promotes balance and calm.
                </p>
                <div className='price-and-date'>
                    <p className='nft-price'>
                        <i class="fa-brands fa-ethereum"></i> 0.041 ETH
                    </p>
                    <p className='buy-time'>
                        <i class="fa-solid fa-clock"></i> 3 days left
                    </p>
                </div>
            </div>
            <div className='author-info'>
                <img src={Author} />
                <p className='nft-author-credit'>
                    Creation of <span className='author-name'>Jules Wyvern</span>
                </p>
            </div>
        </div>
    );
}

export default Card