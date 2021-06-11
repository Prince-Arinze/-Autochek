
import productStyle from '../styles/ProductList.module.css'
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

import Link from 'next/link';

import numbro from 'numbro'
import Pagination from './Pagination';
import Advert from './Advert';

const ProductListings = ({products, postPerPage, totalPages, paginate}) => { 
    return (
       <div className={`container ${productStyle.product_listing}`}>
           <h2 className="heading-tittle text-center font-italic"><span>O</span>ur <span>N</span>ew <span>P</span>roducts</h2>
           <Container className={`${productStyle.products_container}`}>
                <Row className="gy-5">
               
                    <Col lg="9" md="12" className="products__section"> 
                   
                         <Row  className={productStyle.content_row}>
                           <Col lg="12"><h3 className="heading-tittle text-center font-italic">Brand New  Cars</h3></Col>
                            {  products.map(product => (
                                <>
                         
                                <Col lg="4" md="6" key={product.id} className="mt-5">
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
                                </Col> 
                                </>
                              )) 
                            }
                        
                         </Row>
                         <Pagination totalPages={totalPages} postPerPage={postPerPage} paginate={paginate}/>
                         <Advert products={products}/>
                    </Col>       
                    <Col lg="3" md="12" className={`${productStyle.sidebar} mt-lg-0 mt-4 p-lg-0 sidebar__section`}>
                        <aside className="p-sm-4 p-3">
                            <h3 className="search__title">Search here...</h3>
                        </aside>
                    </Col>
                </Row>
           </Container>
       </div> 
    )
}

export default ProductListings