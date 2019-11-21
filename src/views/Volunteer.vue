<template>
     <div class="w-100 h-100 text-justify">
         <section id="contact-img-header">
            <div class="container text-white h-100 w-100 d-flex upper align-items-center text-left">
                Become a volunteer
            </div>
      </section>

       <section id="blog-posts" class="p-5 volunteer">
          <div class="container">
             <div class="row">
                 <div class="col-md-6">
                     <h3 class="text-left">NEED YOUR HEARTFUL HELP</h3>
                     <div class="text">
                         Contributing to GRI is an opportunity to impact the lives of millions of children, most especially girls in Nigeria.

                     </div>
                     <p>
                         It doesn’t matter where you come from, what language you speak, or how young or old you are - this is a community project, and all are welcome!
                     </p>
                     <div class="flex-col d-flex flex-column">
                         <div class="d-flex flex-row mt-3 align-items-center flex-row-sm">
                             <div class="bg-maroon circle-values mr-5">
                                 <i class="fa fa-pencil w-30" ></i>
                             </div>
                             <div class="text-sm-center text-left">
                                 <h5>Positive Thoughts</h5>
                                 <p>We aspire to be like helpers. So we serve all people. No matter their religion, ethnicity, or gender.</p>
                             </div>
                         </div>
                          <div class="d-flex flex-row mt-3 align-items-center flex-row-sm">
                             <div class="bg-maroon circle-values mr-5">
                                 <i class="fa fa-pencil w-30" ></i>
                             </div>
                             <div class="text-sm-center text-left">
                                 <h5>Heartful Help</h5>
                                 <p >We aspire to be like helpers. So we serve all people. No matter their religion, ethnicity, or gender.</p>
                             </div>
                         </div>
                          <div class="d-flex flex-row mt-3 align-items-center flex-row-sm">
                              <div class="bg-maroon circle-values mr-5">
                                 <i class="fa fa-pencil w-30" ></i>
                             </div>
                             <div class="text-sm-center text-left">
                                 <h5>Spread To Everyone</h5>
                                 <p
                                 >In an effort to ensure volunteering at Foundation events is fulfilling experience for you..</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col-md-6">
                     <h3 class="text-left">BECOME A VOLUNTEER</h3>
                     <span class="text-center mt-5" :class="successMsg ? 'text-success': 'text-danger'" v-if="successMsg || errorMsg">
                                {{ errorMsg || successMsg }}
                    </span>
                     <form @submit.prevent="submit">
                         <div class="form-group">
                             <label for="name">Name*</label>
                             <input type="text" name="name" class="form-control" v-model.trim='name' >
                         </div>
                          <div class="form-group">
                             <label for="name">Email*</label>
                             <input type="email" name="email" class="form-control" v-model.trim='email' >
                         </div>
                          <div class="form-group">
                             <label for="name">Phone Number*</label>
                             <input type="text" name="phone" class="form-control" v-model.trim='phoneNumber'>
                         </div>
                          <div class="form-group">
                             <label for="name">Address</label>
                             <input type="text" name="address" class="form-control" >
                         </div>

                         <div class="form-group">
                             <label for="name">Zip/Postal Code</label>
                             <input type="text" name="zip" class="form-control" >
                         </div>
                           <div class="form-group">
                             <label for="name">Country</label>
                             <input type="text" name="zip" class="form-control" >
                         </div>
                           <div class="form-group">
                             <button class="btn btn-primary btn-block">Volunteer</button>
                         </div>
                     </form>
                 </div>
                <section id="questions" class="w-100 mt-3"> 
                    <div class="container d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <h4 class="text-normal text-medium">
                            Any Queries? Give Us a Call At 08113291866 <i class="fa fa-phone"></i>
                        </h4>
                        <p>We are always here for you ?</p>
                        <router-link tag="button" to="/contact-us" class="btn btn-primary">CONTACT NOW</router-link>
    
                    </div>
                </section>
             </div>
          </div>
      </section>
     </div>
</template>

<script>
export default {
  name: "Volunteer",
  data() {
      return {
          name: '',
          email: '',
          phoneNumber: '',
          errorMsg: '',
          successMsg: ''
      }
  },
  methods: {
      submit(){
          if (!this.name || !this.email || !this.phoneNumber) {
              this.errorMsg = 'Please fill in all the required fields'
              return;
          }
          this.errorMsg = '';
          this.successMsg = 'Thanks for volunteering. We would contact you via email'
          setTimeout(this.clearInput, 5000)
      },
      clearInput() {
          this.name = '';
          this.email = '';
          this.phoneNumber = ''
      }
  }
};
</script>

<style scoped>
#mission-gri {
  height: 23rem;
}

#objectives {
  height: 25rem;
}
#objectives div {
  line-height: 2;
}
#advisory-board {
  height: 30rem;
}
.advisory-img-container {
  height: 15rem;
  width: 15rem;
}
</style>
