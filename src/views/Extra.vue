<template>
     <div class="w-100 h-100">
         <section id="past-event" class="p-5">
          <h4 class="text-center text-primary display-4">Past Event</h4>

        <div class="container h-100  d-flex justify-content-center flex-column align-items-center">
          <div class="img-con d-flex justify-content-center flex-column align-items-center">
              <img src="../assets/img/img1.jpg" class="img-fluid w-100 h-100" />
            <span class="text-center"> October 13, 2019</span>
          </div>

          <h4 class="mt-3 text-center">One Million Girls’ March</h4>
          <p class="font-secondary"> 
              Since 2011, October 11th every year has been designated as the International Day of the Girl. It is a day set aside by the United Nations for promoting the rights of girls and addressing the unique challenges they face. It’s a day when diverse groups come together under the same goal to highlight, discuss, and act to advance rights and opportunities for girls everywhere. The day promotes girls’ human rights, highlights gender inequalities that remain between girls and boys and addresses the various forms of discrimination and abuse suffered by girls around the world. From 2012, various themes have been developed to guide the celebration. The themes support engagement of education sector partners working  with girls to amplify their voices and stand up for their rights.
          </p>
          <button class="btn btn-primary  my-sm-0 donate-btn" type="submit">Read More</button>
        </div>
      </section>
      <section id="volunteer">
        <div class="container h-100 d-flex align-items-center flex-column justify-content-center text-white">
          <div class="row">
            <div class="col-md-6 text-sm-center">
                <div>
                  <h3>Become A Volunteer</h3>
                  <p class="font-italic"> You can contribute your time, skills and knowledge through volunteering with GRI. This is an opportunity to create a positive impact. </p>
                </div>
        
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <router-link tag="button" to="/volunteer" class="btn btn-join upper text-center">Join us now</router-link>
              </div>
          </div>
        </div>
      </section>
      <!-- <HomePageBlog /> -->
     </div>
</template>
<script>
// import HomePageBlog from './HomePageBlog'
export default {
  name: 'Extra',
  components: {
    // HomePageBlog
  }
}
</script>


<style scoped>

</style>