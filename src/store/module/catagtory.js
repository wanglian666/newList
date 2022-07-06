import axios  from "@/utils/request"
export default {
    namespaced:true,
    state:{
        catagtoryList :[],
        currentCatagtory:''  //当前激活的分类
    },
    mutations:{
        getCatagtorys(state,payload){
            state.catagtoryList = payload
        },
        updataCurrentCatagtory(state,payload){
            // console.log(payload);
            state.currentCatagtory = payload

        }

    },
    actions:{
        async getCatagtoryList(context){
            let {data:{data:{channels}}} = await axios.get('channels');
            console.log(channels);
            context.commit('getCatagtorys',channels);
            context.commit('updataCurrentCatagtory',channels[0].id);
        }
    }

}