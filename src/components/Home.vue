<template>
  <div class="hello">
    <ShowCase />
    <WhatWeDo />
    <Partners />
    <Extra />
  </div>
</template>

<script>
import ShowCase from './ShowCase.vue'
import WhatWeDo from '../views/WhatWeDo.vue'
import Partners from '../views/Partners.vue'
import Extra from '../views/Extra.vue'


export default {
  name: 'Home',
  components: {
    ShowCase,
    WhatWeDo,
    Partners,
    Extra
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
