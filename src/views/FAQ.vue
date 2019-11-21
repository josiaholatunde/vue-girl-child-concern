    <template>
    <div class="w-100 h-100">
            <section id="contact-img-header">
            <div class="container text-white h-100 w-100 d-flex upper align-items-center">
                FAQ
                        </div>
                    </section>

                    <section id="show-case" class="p-5">
                        <div class="container">
                            <div class="text-center text-medium">You need any help ? <span class="text-bold">FAQ below</span></div>

                        <main class="mt-5"> 
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="accordion" id="accordionExample">
                <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i class="fa fa-arrow-right"></i>
                        <span class="ml-3">How Do I make a donation</span>
                    </button>
                    </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body text-justify">
                        Click ‘Donate’ on the menu. You can make the donation on site or through transfer      </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i class="fa fa-arrow-right"></i>
                        <span class="ml-3">Is GRI Registered ?</span>
                    </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body text-justify">
                        Global Relief Initiative (GRI) is a form-row non-profit organization in Nigeria, dedicated to providing affected communities with opportunity to enhance their living standard
                    </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i class="fa fa-arrow-right"></i>
                        <span class="ml-3">Can I make a donation in honor of someone ?</span>
                    </button>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body text-justify">
                        Yes ? why not ?
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="accordion" id="accordionExample">
            
            <div class="card">
                <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <i class="fa fa-arrow-right"></i>
                        <span class="ml-3">How Can I Locate A GRI Office</span>
                    </button>
                </h2>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                    We have 2 major offices
                    <h4 class="office">
                        ABUJA: &nbsp;
                        <span class="text-light-grey">NO. 5 Daniyar Raiyat Street, off Jeremiah road Gwagwalada Abuja FCT.</span>
                    </h4>
                        <h4 class="office">
                        KOGI: &nbsp;
                        <span class="text-light-grey">NO. 13 Old GRA, by Nursing Home Maiduguri Borno State, Adun Estate behind CBN, off Stadium road, Lokoja Kogi State</span>
                    </h4>
                </div>
                </div>
            </div>

                <div class="card">
                <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <i class="fa fa-arrow-right"></i>
                        <span class="ml-3">Will my donation be used wisely ?</span>
                    </button>
                </h2>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                    We are a registered NGO with proven criminal track record. Funds generated from donations are used wisely
                </div>
                </div>
            </div>
            </div>    
                </div>
                        </div>
                    </main>
                    </div>
        </section>
        <section id="questions"> 
            <div class="container d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <h4 class="text-normal text-medium">
                    Have any question ? Ask us ?
                </h4>
               <div class="mt-3">
                    <a class="btn btn-primary" href="mailto:globalreliefinitiative@yahoo.com"> 
                    Email your questions
                    </a>
               </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "FAQ"
};
</script>
<style scoped>
.btn-link,
.btn-link:active,
.btn-link:hover {
  color: black !important;
  text-decoration: none;
  cursor: pointer;
}

.office {
    font-size: 1rem;
    margin-top: 1rem;
}

.text-light-grey {
    color: #777777;
    font-weight: 400;
    font-size: .8rem;
}

.text-medium {
    font-size: 2rem;
    font-style: normal;
}
</style>

