import './../css/CardInfo.css';

function CardInfo() {
    return(
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
    );
}

export default CardInfo