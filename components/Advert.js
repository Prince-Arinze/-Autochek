import Image from 'next/image'
const Advert = ({products}) => {

    console.log(products[0])
    return (
        <div className="product-sec1 product-sec2 px-sm-5 px-3">
            <div className="row">
                 <h3 className="col-md-4 effect-bg">Carnival Sales</h3>
                 <p className="l-nut-middle">Get Extra 10% Off</p>
                 <div className="col-md-8 bg-right-nut">
                    <Image src="/car-fan.png" alt="Sells advert" width={800} height={600} layout="responsive" className="advert__img"/>
                 </div>
            </div>
        </div>
    )
}

export default Advert;