<template>
  <div class="list">
    <!-- {{newlist}} -->
    <div class="article_item" v-for="item in newlist" :key="item.art_id">
      <h3>{{item.title}}</h3>
      <div class="img_box" v-if="item.cover.type ===1">
        <img :src="item.cover.images[0]"  class="w100" alt="" />
      </div>
      <div class="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
export default {
    /* created(){
        this['listModule/getNewList']();
    }, */
    computed:{
        ...mapState('listModule',{
            newlist: (state) =>state.newList
        }),
        ...mapState('catagtoryModule',{
            currentCatagtory: (state) => state.currentCatagtory
        })

    },
    watch:{
        currentCatagtory(newValue){
            this['listModule/getNewList'](newValue);
        }

    },
    methods:{
        ...mapActions(['listModule/getNewList'])
    }

};
</script>

<style scoped>
</style>