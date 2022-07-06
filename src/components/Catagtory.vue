<template>
  <div>
    <ul class="catagtory">
      <li 
        @click="$store.commit('catagtoryModule/updataCurrentCatagtory',item.id)"
      :class="{select: currentCatagtory === item.id}" 
      v-for="item in catagtoryList" 
      :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import Catagtory from '@/components/Catagtory.vue'
import NewList from '@/components/newList.vue'

import { mapActions,mapState } from 'vuex'
    export default {
  components: { Catagtory, NewList },
  
  created(){
    this['catagtoryModule/getCatagtoryList']();

  },
  computed:{
    ...mapState('catagtoryModule',{
        catagtoryList: (state) => state.catagtoryList,
        currentCatagtory: (state) => state.currentCatagtory
    })


  },
  methods:{
    ...mapActions(['catagtoryModule/getCatagtoryList']),
  }
        
    }
</script>

<style scoped>
</style>