import React, { Component } from 'react'

class Featured extends Component {
  render() {
    return (
      <div className="featured__cards">
          <div className="centered">
            <section className="featured__cards">
                <article className="featured__card">
                  <a href="#">
                      <picture className="thumbnail">
                          <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/94/58/46/rooftop-dining.jpg" alt="Rooftop dining"/>
                      </picture>
                      <div className="card-content">
                          <h2>Rooftops</h2>
                      </div>
                  </a>
              </article>

              <article className="featured__card">
                  <a href="#">
                      <picture className="thumbnail">
                          <img src="http://zipfair.com/wp-content/uploads/2015/03/Nice-house-slc.jpg" alt="Nighttime House"/>
                      </picture>
                      <div className="card-content">
                          <h2>Houses</h2>
                      </div>
                  </a>
              </article>

              <article className="featured__card">
                  <a href="#">
                      <picture className="thumbnail">
                          <img src="https://freshome.com/wp-content/uploads/2018/01/nike-ny.jpg" alt="office"/>
                      </picture>
                      <div className="card-content">
                          <h2>Offices</h2>
                    
                      </div>
                  </a>
              </article>

              <article className="featured__card">
                  <a href="#">
                      <picture className="thumbnail">
                          <img src="https://dkf0vydrjg1g3.cloudfront.net/wp-content/uploads/bfi_thumb/Marina-bay-infinity-pool-banner-day-6e8pzjkgbwm8ykddcvsb0fbhaefn2m5tdz289e4dpk1.jpg" alt="Skyblue pool"/>
                      </picture>
                      <div className="card-content">
                          <h2>Pools</h2>
                      </div>
                  </a>
              </article>
          </section>
          </div>
      </div>
    )
  }
}
export default Featured;