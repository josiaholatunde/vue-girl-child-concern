<template>
    <div class="w-100 h-100">
          <section id="contact-img-header">
            <div class="container text-white h-100 w-100 d-flex upper align-items-center">
                Contact Us
            </div>
      </section>

      <section id="blog-posts" class="p-5">
          <div class="container">
              <div class="row">
                  <div class="col-md-7 blog-con">
                    <div class="post-container w-100">
                        <div class="d-flex justify-content-between">
                                <div class="date">
                                     <i class="fa fa-clock-o"></i>
                                     <span>June 27, 2019</span>
                                </div>
                                <div class="author">
                                    <i class="fa fa-pencil"></i>
                                    <span>By</span> Ogunboyejo Olatunde
                                </div>
                            </div>
                            <p class="my-3 font-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est rem ipsa nostrum id exercitationem, facere totam temporibus quod tenetur pariatur vel repellendus! Cupiditate ea repellendus eligendi tempora voluptatum
                                 alias sunt iusto temporibus sint rerum!</p>
                            <button class="btn btn-primary">Read More</button>
                            <hr />
                    </div>
                    <div class="post-container w-100">
                        <div class="d-flex justify-content-between">
                                <div class="date">
                                     <i class="fa fa-clock-o"></i>
                                     <span>June 27, 2019</span>
                                </div>
                                <div class="author">
                                    <i class="fa fa-pencil"></i>
                                    <span>By</span> Idris Lawal
                                </div>
                            </div>
                            <p class="my-3 font-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est rem ipsa nostrum id exercitationem, facere totam temporibus quod tenetur pariatur vel repellendus! Cupiditate ea repellendus eligendi tempora voluptatum
                                 alias sunt iusto temporibus sint rerum!</p>
                            <button class="btn btn-primary">Read More</button>
                        <hr />
                    </div>

                    <div class="post-container w-100">
                        <div class="d-flex justify-content-between">
                                <div class="date">
                                     <i class="fa fa-clock-o"></i>
                                     <span>June 27, 2019</span>
                                </div>
                                <div class="author">
                                    <i class="fa fa-pencil"></i>
                                    <span>By</span> Idris Lawal
                                </div>
                            </div>
                            <p class="my-3 font-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est rem ipsa nostrum id exercitationem, facere totam temporibus quod tenetur pariatur vel repellendus! Cupiditate ea repellendus eligendi tempora voluptatum
                                 alias sunt iusto temporibus sint rerum!</p>
                            <button class="btn btn-primary">Read More</button>
                        <hr />
                    </div>

                    <div class="post-container w-100">
                        <div class="d-flex justify-content-between">
                                <div class="date">
                                     <i class="fa fa-clock-o"></i>
                                     <span>June 27, 2019</span>
                                </div>
                                <div class="author">
                                    <i class="fa fa-pencil"></i>
                                    <span>By</span> Idris Lawal
                                </div>
                            </div>
                            <p class="my-3 font-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est rem ipsa nostrum id exercitationem, facere totam temporibus quod tenetur pariatur vel repellendus! Cupiditate ea repellendus eligendi tempora voluptatum
                                 alias sunt iusto temporibus sint rerum!</p>
                            <button class="btn btn-primary">Read More</button>
                        <hr />
                    </div>

                  </div>
                  <div class="col-md-3 col-lg-offset-2 pl-3 ml-5 form-blog">
                      <input type="search" class="form-control" placeholder="Looking for something" />
                      <h4 class="mt-5">NEWSLETTTER </h4>
                      <div class="form-group mt-3">
                        <label class="form-label">Email Address</label> 
                        <input type="email" name="email"  class="form-control"/>
                      </div>
                      <button class="btn btn-md btn-success">Subscribe</button>
                        <h5 class="mt-5">FEMALE STUDENT SCHOLARSHIP SCHEME</h5>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">N</div>
                            </div>
                            <input type="text" class="form-control" placeholder="10000" id='custom-amount' v-model='donationAmount' />
                        </div>
                        <div class="tag-group w-100 mt-3">
                            <button class="bg-grey give-btn  px-3" @click='updateAmount("10000")'>N10000.00</button>
                            <button class="bg-grey give-btn ml-3 px-3" @click='updateAmount("20000")'>N20000.00</button>
                            <button class="bg-grey give-btn px-3" @click='updateAmount("30000")'>N30000.00</button>
                            <button class="bg-grey give-btn mt-1 px-3 ml-3" @click='updateAmount("50000")'>N50000.00</button>
                            <button class="d-block custom-amount-btn mt-2" for='custom-amount'>Custom Amount</button>
                        </div>
                        <div class="personal-info mt-3">
                            <h5>Personal Info</h5>
                            <span :class="errorMsg ? 'text-danger': 'text-success'"> {{ errorMsg || successMsg }} </span>

                            <hr />
                            <div class="form-row">
                                <div class="col-md-6 pl-0">
                                    <input type="text" class="form-control" v-model.trim='firstName' placeholder="First Name" />
                                  </div>
                                  <div class="col-md-6 pl-0 pr-0">
                                    <input type="text" class="form-control p-info__last-name" v-model.trim='lastName' placeholder="Last Name" />
                                  </div>
                                  <input type="text" class="form-control mt-3" placeholder="Company Name" v-model.trim='companyName'  />
                                  <input type="email" class="form-control mt-3" placeholder="Email Address" v-model.trim='email' />
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" id="autoSizingCheck2" v-model='isAnonymous'>
                                    <label class="form-check-label" for="autoSizingCheck2" >
                                      Make this an anonymous donation
                                    </label>
                                  </div>
                                  <textarea class="form-control"  placeholder="Leave a comment">

                                  </textarea>
                                  <div class="donation-total bg-grey mt-3">Donation Total: {{ donationAmount }} </div>
                                  
                            </div>
                            <div class="form-group">
                                <button  class="btn btn-primary mt-2" @click="makeDonation">
                                    Make donation
                                  </button>
                            </div>
                            <div class="recent-posts mt-3">
                                <h5>Recent Posts</h5>
                                <ul>
                                    <li class="font-secondary"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi exercitationem 
                                        dolores fugit facilis perspiciatis. 
                                        <div>June 27, 2019</div>
                                    </li>
                                    <li class="font-secondary mt-1"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi exercitationem 
                                        dolores fugit facilis perspiciatis. 
                                        <div>June 27, 2019</div>
                                    </li>
                                    <li class="font-secondary mt-1"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi exercitationem 
                                            dolores fugit facilis perspiciatis. 
                                            <div>June 27, 2019</div>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                  </div>
              </div> 
          </div>
      </section>

    </div>
</template>
<script>
export default {
    data() {
        return {
            donationAmount: '',
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            successMsg: '',
            errorMsg: '',
            isAnonymous: false
        }
    },
    computed: {
        fullName () {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    methods: {
        updateAmount(amount) {
            this.donationAmount = amount;
        },
        makeDonation() {
            if (!this.firstName || !this.lastName || !this.companyName || !this.email) {
                this.errorMsg = 'Please fill in one of the inputs to make a donation';
                return;
            } 
            this.errorMsg = ''
            let user = this.isAnonymous ? 'user':  this.fullName
            this.successMsg = `Dear, ${user} your donation was successfully received.`
            setTimeout(this.clearInput, 10000);
            
        },
        clearInput() {
            this.firstName = '';
            this.lastName = '';
            this.companyName = '';
            this.email = ''
            this.errorMsg = '',
            this.successMsg = ''
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
</style>