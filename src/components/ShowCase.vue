<template>
     <section id="show-case-slider">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active img-container">
                        <img src="../assets/img/img1.jpg" class="d-block w-100 h-100 img-fluid img-style" alt="...">
                        <div class="carousel-caption">
                          <h5 class="upper">Empower targeted communities through skill acquisition and startup grant</h5>
                          <router-link tag="a" to="/contact-us" class="btn btn-md btn-primary show-case-btn">Donate Now</router-link>
                        </div>
                      </div>
                      <div class="carousel-item img-container">
                        <img src="../assets/img/img2.jpg" class="d-block w-100 h-100 img-style" alt="...">
                        <div class="carousel-caption">
                          <h5>Reduce the high rate of child mortality </h5>
                          <router-link tag="a" to="/contact-us" class="btn btn-md btn-primary show-case-btn ">Donate Now</router-link>
                        </div>
                      </div>
                      <div class="carousel-item img-container">
                        <img src="../assets/img/img3.jpg" class="d-block w-100 h-100 img-style" alt="...">
                        <div class="carousel-caption">
                          <h5>Support GRI change lives with a donation</h5>
                          <router-link tag="a" to="/contact-us" class="btn btn-md btn-primary show-case-btn ">Donate Now</router-link>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
      </section>
</template>
