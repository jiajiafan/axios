<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @change="changeHandler"
      ></cube-tab-bar>
    </div>
  </div>
</template>
<style lang="scss">
*{margin:0;padding:0;}
html,body,#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size:18px;
}
.content {
  flex: 1;
}
.footer{
  background:#f6f6f6;
}
</style>
<script>
export default {
  data(){
    return {
      selectedLabelDefault: '/',
      tabs: [{
        label: '首页',
        value:'/',
        icon: 'cubeic-home'
      }, {
        label: '课程',
        value:'/curse',
        icon: 'cubeic-like'
      }, {
        label: '个人中心',
        value:'/profile',
        icon: 'cubeic-vip'
      }]
    }
  },
  watch:{
    $route:{
      handler(to,from){
        console.log(to)
        this.selectedLabelDefault=to.path;
      },
      immediate:true
    }
  },
  methods:{

    changeHandler (label) {
       this.$router.push(label)
      // console.log(label+"**")
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>
