<template>
    <div class="w-100 h-100">
         <section id="contact-img-header">
            <div class="container text-white h-100 w-100 d-flex upper align-items-center">
                Contact Us
            </div>
      </section>
      <div class="text-center mt-5" :class="successMsg ? 'text-success': 'text-danger'" v-if="successMsg || errorMsg">
                    {{ errorMsg || successMsg }}
        </div>
      <section id="contact-us">
        <div class="container p-5 pl-0">
            <div class="row">
                <div class="col-md-5">
                    <div class="card  h-100 p-3">
                        <div class="card-body">
                            <div class="form-group">
                                <label class="form-label">Name (required)</label>
                                <input type="text" name="name" id="name" class="form-control" v-model.trim='name'>
                            </div>
                            <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" name="name" id="name" class="form-control" v-model.trim='email'>
                            </div>
                            <div class="form-group">
                                    <label class="form-label">Subject</label>
                                    <input type="text" name="name" id="name" class="form-control" v-model.trim='subject'>
                            </div>
                            <div class="form-group">
                                    <label class="form-label">Message</label>
                                   <textarea class='form-control' name="message" rows="7" v-model.trim='message'>
                                    </textarea>
                            </div>
                            <button class="btn btn-primary btn-block mt-5 btn-lg" @click='contactUs'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 p-5">
                    <h3>Office Address:</h3>
                    <div class="office-details pl-5">
                       <div class="detail-1">
                            <h4>Abuja Office</h4>
                            <p class="text-light-grey">No. 5, Erie Close, off Erie Crescent, Maitama</p>
                       </div>
                       <div class="detail-1">
                            <h4>Abuja Office</h4>
                            <p class="text-light-grey">No. 5, Erie Close, off Erie Crescent, Maitama</p>
                       </div>
                       <div class="detail-1">
                            <h4>Abuja Office</h4>
                            <p class="text-light-grey">No. 5, Erie Close, off Erie Crescent, Maitama</p>
                       </div>
                    </div>
                    <div class="email pl-5">
                        <div class="message-icon my-3">
                            <i class="fa fa-envelope fa-2x text-light-blue"></i>
                        </div>
                        <h4>Email us @</h4>
                        <span class="text-light-grey">
                            info@rightconcern.org
                        </span>
                    </div>

                    <div class="email pl-5">
                            <div class="message-icon my-3">
                                <i class="fa fa-envelope fa-2x text-light-blue"></i>
                            </div>
                            <h4>Email us @</h4>
                            <span class="text-light-grey">
                                info@rightconcern.org
                            </span>
                        </div>
                </div>
            </div>
            <div class="social-links text-center  mt-5"  >
                <h4>Stay Social</h4>
                <div class="d-flex justify-content-center align-items-centerflex-column">
                    <div class="bg-light-blue circle d-flex align-items-center justify-content-center">
                            <i class="fa fa-facebook fa-2x text-white"></i>
                        </div>
                        <div class="bg-light-blue circle d-flex align-items-center justify-content-center mx-3">
                                <i class="fa fa-twitter fa-2x text-white"></i>
                        </div>
                        <div class="bg-yellow circle d-flex align-items-center justify-content-center"> 
                                <i class="fa fa-instagram fa-2x text-white"></i>
                        </div>
                </div>
            </div>
        </div>
      </section>

    </div>
</template>
<script>
export default {
   name: 'ContactUs',
   data() {
       return {
           name: '',
           email: '',
           subject: '',
           message: '',
           errorMsg: '',
           successMsg: ''
       }
   },
   methods: {
       contactUs() {
           if (!this.name || !this.email || !this.subject || !this.message) {
               this.errorMsg = 'Please fill in all the required fields';
               return;
           }
           this.errorMsg = ''
           this.successMsg = 'Thanks for contacting us. You would reached shortly via email';

           setTimeout(this.clearInput, 5000)
       },
       clearInput() {
           this.name = '';
           this.email = '';
           this.subject = '';
           this.message = '';
       }
   }
}
</script>
<style scoped>
#contact-img-header {
    height: 15rem;
    background:  rgba(10,10,10,0.2) url('../assets/img/img3.jpg') center center/cover  no-repeat;
    width: 100%;
    

}
#contact-img-header div {
    font-size: 2.5rem;    
     
}

#google-map {
    height: 20rem;
    width: 100%;
}
</style>