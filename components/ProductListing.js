
import productStyle from '../styles/ProductList.module.css'
import Image from 'next/image';

import Link from 'next/link';

import numbro from 'numbro'
import Pagination from './Pagination';
import Advert from './Advert';
import Sidebar from './Sidebar';

const ProductListings = ({products, postPerPage, totalPages, paginate}) => { 
    return (
       <div className={`container ${productStyle.product_listing}`}>
           <h2 className="heading-tittle text-center font-italic"><span>O</span>ur <span>N</span>ew <span>P</span>roducts</h2>
           <div className={`${productStyle.products_container} container`}>
                <div className="row">
               
                    <div className="col-lg-9 products__section"> 
                    <div className="text-left p-4">
                         <div  className={`${productStyle.content_row} row`}>
                           <div className="col-lg-12"><h3 className="heading-tittle text-center font-italic">Brand New  Cars</h3></div>
                            {  products.map(product => (
                                <>
                         
                                <div key={product.id} className="mt-5 col-lg-4 col-md-6">
                                    <div className="men-thumb-item text-center new__box">
                                         <Image src={product.imageUrl} alt={product.title} height={150} width={100} className={productStyle.product_img}/>
                                        
                                        <div className="new__link">
                                            <Link href={`/product/${product.id}`}><a className="btn_details">Quick View</a></Link>
                                        </div>
                             
                                         <div className="item-info-product text-center border-top mt-4">
                                             <h4 className="pt-1">
                                                 <Link href="sinle.html">
                                                     {product.title}
                                                 </Link>
                                             </h4>
                                             <div className="info-product-price my-2">
                                                 <span className="item_prices">
                                                   &#8358;{numbro(product.marketplacePrice).format({thousandSeparated: true})}
                                                 </span>   <del> &#8358;{numbro(product.marketplacePrice).format({thousandSeparated: true})}</del>
                                                <div className="snipcart-details">
                                                    <button className="btn button">add to cart</button>
                                                </div>
                                             </div>
                                         </div>
                                    </div>
                                </div> 
                                </>
                              )) 
                            }
                           
                         </div>
                         </div>
                         <Pagination totalPages={totalPages} postPerPage={postPerPage} paginate={paginate}/>
                         <Advert products={products}/>
                    </div>       
                    <div className={`${productStyle.sidebar} col-lg-3 mt-lg-0 mt-5 sidebar__section`}>
                        <div className="text-left p-4">
                            <div className="row">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div> 
    )
}

export default ProductListings