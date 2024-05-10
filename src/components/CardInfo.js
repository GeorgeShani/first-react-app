import './../css/CardInfo.css';

function CardInfo() {
    const nftName = "Equilibrium #3429";
    const nftDescr = "Our Equilibrium collection promotes balance and calm.";
    const nftPrice = "0.041 ETH";
    const remainingTime = "3 days left"

    return(
        <div className='info-container'>
            <p className='nft-title'>{ nftName }</p>
            <p className='nft-description'>{ nftDescr }</p>
            <div className='price-and-date'>
                <p className='nft-price'>
                    <i class="fa-brands fa-ethereum"></i> { nftPrice }
                </p>
                <p className='buy-time'>
                    <i class="fa-solid fa-clock"></i> { remainingTime }
                </p>
            </div>
        </div>
    );
}

export default CardInfo