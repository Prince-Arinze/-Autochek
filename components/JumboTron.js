import Image from 'next/image'
const Jumbotron = () => {
    return (
        <div className="py-sm-5 py-4 jumbotron">
             <div className="container py-xl-4 py-lg-2">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="join-agile text-left p-4">
                              <div className="row">
                                  <div className="col-sm-7 offer-name">
                                      <h6>Classy and aesthestic cars</h6>
                                      <h4 className="mt-2 mb-3">Brand new</h4>
                                      <p>Sale up to 25% off all in store</p>
                                  </div>
                                  <div className="col-sm-5 offerimg">
                                      <Image src="/mercedez.png" alt="mercedez" width={600} height={600} />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 mt-lg-0 mt-5">
                          <div className="join-agile text-left p-4">
                              <div className="row">
                                  <div className="col-sm-7 offer-name">
                                      <h6>Neat, Smooth, and better</h6>
                                      <h4 className="mt-2 mb-3">King of the road</h4>
                                      <p>Free shipping order over  &#8358;50,000</p>
                                  </div>
                                  <div className="col-sm-5 offerimg">
                                      <Image src="/sport-car.png" alt="mercedez" width={600} height={600} />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
             </div>
        </div>
    )
}

export default Jumbotron;