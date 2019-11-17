<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
     methods:  {
      
   }
}
</script>

<style lang='scss'>

@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

.container {
    max-width: 1240px !important;
}

body {
    font-family: 'Montserrat', sans-serif;
}

.navbar a {
    color: #0a0a0a !important;
    display: block;
    text-transform: uppercase;
    padding: 1rem 1rem !important;
    align-items: center;
   
} 
.b-400 { font-weight: 400; font-style: normal; color: #ffffff}
.text-grey {color: #ddd;}
.text-light-grey {color: rgba(86, 86, 86, 0.8);}

.font-secondary {
    font-family: Arial, Helvetica, sans-serif;
}

.text-light-blue {
    color: #42BCE2;
}
.bg-light-blue {
    background: rgb(188, 196, 199);
}
.bg-yellow {
    background-color: #ffd970;}

    /* Utility */
    .text-muted {
        color: rgba(255, 255, 255, 0.60) !important;
    }

.btn {
    cursor: pointer;
}
.upper { text-transform: uppercase;}
.p-unique {
    padding: 6rem 4.6rem 4.6rem 4.6rem;
}
.mt-md {margin-top: 3rem;}

.img-style {
    background-size: cover;
    object-fit: cover;
}
.img-container {
    height: 50rem !important;
}
.navbar-nav a {
    font-size: .8rem;
    font-weight: 500;
}
.btn-primary {
    background-color: #802350 !important;
    border: none !important;
    color: #fff !important;
}
.text-primary {
    color: #802350 !important;
}
.bg-primary {
    background: #802350 !important;
}
.btn-nav {
    width: 7rem;
}
.show-case-btn {
    padding: 1rem 2rem;
    border-bottom: 1px solid #fff;
}

.show-case-btn:hover {
    background-color: #fff;
    color: #0a0a0a;
    transition: all .3s ease-in;
}

.btn ,.btn-primary:active {
    outline: none !important;
    box-shadow: none !important; 
    border: none !important;
}

#show-case-slider {
    height: 50rem;
}

#show-case-slider #carouselExampleCaptions {
    height: 100%;
    width: 100%;
}


#contact-img-header {
    height: 15rem;
    background:  rgba(10,10,10,0.2) url('./assets/img/img3.jpg') center center/cover  no-repeat;
    width: 100%;
    

}
#contact-img-header div {
    font-size: 2.5rem;    
     
}

#google-map {
    height: 20rem;
    width: 100%;
}

#show-case-slider .carousel-caption {
    bottom: 20% !important;
}

#show-case-slider .carousel-caption h5 {
    font-size: 5rem;
    font-weight: 800;
    text-shadow: rgba(0, 0, 0, 0.75) 7px 7px 10px;
    text-transform: uppercase;
}


/* What W e do*/

#what-we-do {
    height: 80rem;
}
#what-we-do .flex-center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#what-we-do p {
    color: rgba(34, 34, 34, 0.6);
    font-weight: 400;;
}

.divider {
    background: #802350;
    width: 10%;
    height: .5rem;
}
.border-md {
    border: 5px solid #802350;
}
.divider-md {
    background: #802350;
    width: 70%;
    height: .5rem; 
    margin-top: 5rem;
}


.content-desc {
    font-weight: 400;
    margin-bottom: 1.4rem;
}

/* Donate */
#donate {
    height: 20rem;
    width: 100%;
    margin-top: 61rem;
}

.btn-white {
    color: #802350;
    background-color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    width: 15%;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 50px 50px 50px 50px;
    padding: 12px 30px 12px 30px;
}
.btn-white:hover {
    border: 5px dotted #fff;
    background: #802350;
    color: #fff;
    transition: all .3s ease-in;

}

.logo-container {
    height: 4rem;
    margin-bottom: 3rem;
}

#partners {
    height: 38rem;
    width: 100%;
    padding: 5rem;
    padding-bottom: 0;
}

/* Past Event */
#past-event .img-con {
    height: 25rem;
    width: 30%;
}

#past-event span {
    font-weight: 400;
}
#past-event h4 {
    font-size: 2.4rem;
    font-weight: 800;
}

#volunteer {
    height: 20rem;
    background: linear-gradient(rgba(0, 106, 131, 0.80), rgba(0, 106, 131, 0.80)), url('/img/img3.jpg') center center/cover  no-repeat;
    width: 100%;
    background-attachment: fixed;
}

.card-text {
    font-family: Arial, Helvetica, sans-serif;
    color: #ccc;
}

.btn-join {
    color: #802350;
    background-color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 50px 50px 50px 50px;
    padding: 12px 48px 12px 48px;
}

#main-footer {
    height: 10rem;
    padding: 2rem;
    width: 100%;
    background: red;
}

.circle-values {
    height: 4rem;
    width: 7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#copyright {
    height: 5rem;
}
.address-1 h4 {
    font-size: .9rem;
    color: #fff;
    font-weight: 800;
}
.header > h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
}
.card-height {
    height: 23rem;;
}
.post-date {
    font-size: .8rem;
}

.social-links {
    height: 7rem;
}

.circle {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
}



#google-map {
    height: 20rem;
    width: 100%;
}

/* Blog.html */

.give-btn {
    background: #ededed;
    border: 1px solid #ccc;
    color: #333;
    padding: 8px 10px;
    cursor: pointer;
    line-height: 1.2em;
    font-size: 1em
}
.post-container p {
    text-align: justify;
}

.recent-posts li {
    border-bottom: 1px solid #ccc;
}
.border-bottom {
    background: #802350;
    width: 20%;
    height: 2px;
    margin-top: -.3rem;

}
.border-md-bottom {
    background: #802350;
    width: 10%;
    height: 7px;
    margin-top: -.3rem;
    text-align: center;
    margin: 2rem auto;
}

.bg-maroon {
    background: #eaeaea;

}



/* Media Query */
@media only screen and (max-width: 78rem) {
   #what-we-do .highlight {
        width: 80%;
        height: 48rem;
    }
    .highlight h4 {
        font-size: 1.3rem;
    }
    .highlight .content-desc {
        font-weight: 100;
        color: rgba(86, 86, 86, 0.5);
    }
    #show-case-slider .carousel-caption h5 {
        font-size: 4rem;
    }
    #donate {
        margin-top: 64rem;
    }
    #donate .btn-white {
        width: 20%;;
    }
    #past-event p {
        text-align: justify;
        line-height: 1.7;
        font-weight: 400;
    }
    #past-event .container, #what-we-do p:first-child {
        padding: 0 4rem;
    }
    #volunteer .container {
        padding: 0 7rem;
    }
    #volunteer p {
        font-size: .9rem;
        font-weight: 400;
    }

    #blog .container {
        padding: 5rem !important;
    }
    #blog .card-height {
        height: 25rem;
    }

}

@media only screen and (max-width: 78rem) {
    #blog .card-height {
        height: 28rem;
    }
}

@media only screen and (max-width: 68rem) {
    #what-we-do {
        height: 60rem !important;
    }
    
}

@media only screen and (max-width: 53rem) {
    .navbar-nav a {
        padding: 1rem 0.5rem !important;
        font-size: .7rem;
    }
    #navbar .nav-link {
        padding: .5rem 0;
    }
    .navbar-nav .btn {
        margin-right: .5rem !important;
    }
    .btn-nav {
        width: 5rem !important;
        margin-right: 0 !important;
    }
    .highlight {
        width: 90% !important;
    }
    #blog {
        .container {
            padding: 0 !important;
        }
    }
     #what-we-do .highlight {
        height: 70rem !important;
    }
    #past-event .container {
        padding: 0 !important;
    }
    #past-event .img-con {
        height: 20rem !important;
    }
    #donate {
        margin-top: 87rem !important;
         .btn-white {
             width: 30% !important;
         }
    }
    
}

@media only screen and (max-width: 48rem) {
    .navbar-nav a {
        font-size: .7rem !important;
    }
    #blog {
        padding-left: 0;
        padding-right: 0;
        margin-top: 2rem;

        h4 {
            font-size: 2rem;
        }
    }

    #blog .container {
        padding: 0 !important;
    }
    #what-we-do .highlight {
        width: 90%  !important;
        height: 73rem !important;;
    }
    .carousel-caption h5 {
        font-size: 3rem !important;
    }
    .img-container, #show-case-slider {
        height: 30rem !important;
    }
    #what-we-do {
        height: 60rem;
    }
    #donate {
        margin-top: 90rem;
    }
    #donate div {
        padding: 0 4rem;
    }
    #donate .btn-white {
        width: 35%;
    }
    #partners {
        height: 50rem;
    }
    #past-event .img-con {
        width: 70%;
    }
}

@media only screen and (max-width: 41rem) {
    #what-we-do {
        height: 55rem;
    }
    #donate {
        margin-top: 107rem;
    }
    #show-case-slider ,#show-case-slider .img-container {
        height: 30rem !important;
    }
    #donate .btn-white {
        width: 45%;
    }
    #what-we-do .highlight {
        width: 90%;
        height: 93rem;
    }

}

@media only screen and (max-width: 36rem) {
    #what-we-do {
        height: 55rem;
    }
    .p-unique {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
    }
    #what-we-do .highlight {
        height: 78rem !important;
    }
    #donate {
        margin-top: 99rem !important;
        .btn-white {
            width: 55%;
        }
    }

    .show-case-btn {
        padding: 1rem !important;
    }

    .carousel-caption h5 {
        font-size: 1.6rem !important;
        line-height: 1.4;
    }
 
    #show-case-slider ,#show-case-slider .img-container {
        height: 30rem !important;
    }
    
    #volunteer .container {
        padding: 0 2rem;
        text-align: center;
    }

    #partners {
        padding-left: 2rem;
        padding-right: 2rem;
        height: 110rem;

        .container p {
            margin-top: 1rem !important;
        }
    }
    #partners .logo-container {
        height: 5rem;
        margin-bottom: 2.3rem;
    } 
    #partners .logo-container img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
    #past-event .img-con {
        width: 90%;
        h4 {
            font-size: 1.5rem !important;
        }
    }
    #past-event .container {
        padding: 0 0rem;
    }
    #blog {
        .card-height {
            height: 18rem !important;
        }
    }
    #blog .card {
        margin-bottom: 1.5rem;
    }
    .p-90 {
        width: 90%;
        text-align: center !important;
    }
}

@media only screen and (max-width: 28rem) {

    .navbar-brand {
        font-size: .9rem !important;
        margin-right: 0 !important;
    }
    #blog {
        .card-height {
            height: 25rem !important;
        }
    }
    #past-event {
        padding: 1rem !important;
    }
    #past-event .img-con {
        height: 15rem;
    }
    #donate {
        margin-top: 121rem !important;

        div > h3 {
            font-size: 1.35rem;
        }

        .btn-white {
            width: 90% !important;
        }
    }
    .p-90 {
        width: 90%;
        text-align: center !important;

    }

    .text-sm-center {
        text-align: left !important;
    }
    #what-we-do {
        height: 50rem !important;
    }
      #what-we-do .highlight {
        height: 106rem !important;
    }

    #show-case {
        padding: 1rem !important;
        text-align: justify;
    }

    #main-footer {
        padding: 0rem !important;
    }
    .padd-1 {
        padding: 1rem !important;
    }

    #blog-posts {
        padding: 0rem !important;
        margin-top: 1rem !important;
    }
     #mission-gri  {
         height: 30rem !important;
         margin-top: 3rem !important;
         margin-bottom: 2rem !important;
     }
    #mission-gri .container > div {
        display: flex;
        flex-direction: column;
        div {
            margin-bottom: 1rem;
        }
    }
    #objectives {
        height: 29rem !important;
    }

    #partners {
        padding-left: 0;
        padding-right: 0;
        text-align: justify;
    }

    #contact-img-header div {
    font-size: 2.2rem;    
    padding-left: 1.4rem;
     
    }
    .form-blog {
        padding-left: 0 !important;
        margin-left: 0 !important;
    }
    .p-info__last-name {
        margin-top: 1rem;
    }
    .blog-con {
        padding-left: 0;
        padding-right: 0;
    }
    .footer-header {
        margin-top: 1rem !important;
    }

    #contact-us  {
        .container {
            padding: 1rem !important;

            h3 {
                font-size: 1.2rem;
            }
            h4 {
                font-size: 1rem;
            }
        }

    }
    #contact-us .card-body {
        padding: 1rem !important;
    }

    #contact-us .office-details, #contact-us  .email {
        padding-left: 0 !important;
    }

    .flex-row-sm {
        display: flex;
        flex-direction: column !important;
        .circle-values  {
            height: 4rem;
            width: 4rem;
            margin-right: 0 !important;
        }
        .text-sm-center {
            text-align: center !important;
            margin-top: 1rem;

            h3 {
                font-size: 1.6rem;
            }
        }
        
    }

    .volunteer h3 {
        font-size: 1.3rem;
        text-align: center;
        margin-top: 1rem;
    }

  
    
}

</style>
