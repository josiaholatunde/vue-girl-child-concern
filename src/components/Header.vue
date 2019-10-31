<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
       <div class="container px-0">
            <router-link class="navbar-brand" to='/'>
                <img src="../assets/img/images.png" class="img-fluid" height="30" width="30" />
                Girl Child Concerns
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Who we are
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link tag='a' class="dropdown-item" to="/our-story">Our Story</router-link>
                        <router-link class="dropdown-item" tag='a' to="/leadership">Leadership</router-link>
                        <a class="dropdown-item" href="#">Our Team</a>
                        <a class="dropdown-item" href="#">FAQ</a>
                    </div>
                </li>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          What we do
                        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Education for under privileged girls</a>
                        <a class="dropdown-item" href="#">Health</a>
                        <a class="dropdown-item" href="#">Vocational Training</a>
                    </div>
                </li>
                 <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Events
                              </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <router-link tag='a' class="dropdown-item" to="/blog">Blog</router-link>
                          </div>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">Get Involved</a>
                 </li>
                 <li class="nav-item">
                     <router-link tag='a' class="nav-link" to="/contact-us">Contact Us</router-link>
                </li>
                 <button class="btn btn-primary mr-5 my-sm-0 donate-btn btn-nav" type="submit">Donate</button>
            </ul>
            </div>
       </div>
      </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

</style>