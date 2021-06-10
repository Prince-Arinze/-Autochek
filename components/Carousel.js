

import React, { useState } from 'react';
import Image from 'next/image'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button
} from 'reactstrap';
import carouselStyle from "../styles/Carousel.module.css"


const CarouselSlide = ({data}) => {
    const getImg = data.carMediaList.map(res => res).slice(0, 6);
    const items = getImg.map(result => {
        return {
            src: `${result.url}`,
            altText: `${result.name}`,
            caption: `${result.name}`
        }
    })
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            className={carouselStyle.carousel_container }
        >
            <Image src={item.src} alt={item.altText} className={carouselStyle.carousel_img} layout="responsive" height={400} width={1000} objectPosition="center"/>
            <div className={carouselStyle.banner}>
                <p>Get Flat <span>10%</span> cashback</p>
                <h2>Best <span className={carouselStyle.tag}>Cars</span> only</h2>
                <Button color="primary">Shop Now</Button>
            </div>
        </CarouselItem>
        );
    });

    return (
        <div className={carouselStyle.carousel_slider}>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
    </div>
  );
}

export default CarouselSlide;