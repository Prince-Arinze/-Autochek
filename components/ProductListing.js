import productStryle from '../styles/ProductList.module.css'
import { Container, Row, Col } from 'reactstrap';

const ProductListings = () => { 
    return (
       <div className={`container ${productStryle.product_listing}`}>
           <h2><span>O</span>ur <span>N</span>ew <span>P</span>roducts</h2>
           <Row>
            <Col lg="8" md="8">.col-3</Col>
            <Col lg="4">.col-3</Col>
           </Row>
       </div> 
    )
}

export default ProductListings