import Head from 'next/head'
import CarouselSlide from '../components/Carousel'
import Navbars from '../components/Navbar'
import ProductListings from '../components/ProductListing'

export const getStaticProps = async ()  => {
  const res = await fetch(`https://api-prod.autochek.africa/v1/inventory/make?popular=true`)
  const data = await res.json();

  const media = await fetch(`https://api-prod.autochek.africa/v1/inventory/car_media?carId=R1nVTV4Mj`);
  const newMedia = await media.json();

  const products = await fetch(`https://api-prod.autochek.africa/v1/inventory/car/search`);

  const allProducts = await products.json()

  return {
    props: { data, newMedia, allProducts },
  }
}

export default function Home({data, newMedia, allProducts }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Cars Store place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbars data={data} products={allProducts}/>
      <CarouselSlide data={newMedia}/>
      <ProductListings />
    </div>
  )
}
