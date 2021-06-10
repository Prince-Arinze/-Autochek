import { useState } from 'react';
import Link from "next/link"

const DropDowns = ({products}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <>
          <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
               {
                   products.result.map((data, index) => (
                       <li key={index}>
                           <Link href="/api" onClick={() => setClick(false)}>
                               <a>{data.title}</a>
                           </Link>
                       </li>
                   ))
               }
          </ul>
        </>
    )
}

export default DropDowns;