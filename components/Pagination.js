import { Row, Col } from 'reactstrap'

const Pagination = ({postPerPage, totalPages, paginate}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPages / postPerPage); i++){
        pageNumber.push(i)
    }

    return (
       <Row>
           <Col lg="12">
            <nav className="paginated-nav">
                <ul className="pagination">
                    {pageNumber.map(number => (
                        <li key={number} className="page-item">
                            <span className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
             </nav>
           </Col>
       </Row>
     
    )
}

export default Pagination;