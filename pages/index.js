import { useState } from 'react';
import Head from 'next/head';
import CarouselSlide from '../components/Carousel';
import Navbars from '../components/Navbar';
import ProductListings from '../components/ProductListing';


export default function Home({data, allProducts }) {
  const { pagination: { currentPage } } = allProducts;
  const { result }  = allProducts;
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [postPerPage] = useState(6);

  const indexOfLastPost = currentPageNum * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = allProducts.result.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPageNum(pageNumber)
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Cars Store place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbars data={data} products={allProducts}/>
      <CarouselSlide data={allProducts}/>
      <ProductListings data={data} products={currentPosts} postPerPage={postPerPage} totalPages={result.length} paginate={paginate}/>
    </div>
  )
}

export const getStaticProps = async ()  => {
  const res = await fetch(`https://api-prod.autochek.africa/v1/inventory/make?popular=true`)
  const data = await res.json();

  const products = await fetch(`https://api-prod.autochek.africa/v1/inventory/car/search`);
  const allProducts = await products.json();

  return {
    props: { data, allProducts }
  }
}