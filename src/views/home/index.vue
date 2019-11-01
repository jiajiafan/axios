<template>
  <div class="home">
    shouye
  </div>
</template>

<script>
// @ is an alias to /src
import {createNamespacedHelpers} from 'vuex';
import {fetchCategory} from '@/api/home';
let {mapActions,mapState} =createNamespacedHelpers('home')

export default {
  mounted(){

      fetchCategory().then(data=>{
         console.log(data)
      })
      // this.$store.dispath('types.SET_CATEGORIES')
      this[types.SET_CATEGORIES]();
  },
  computed:{
      ...mapState(['categories'])
  },
  methods:{
    ...mapActions(['types.SET_CATEGORIES'])
  },

}
</script>
