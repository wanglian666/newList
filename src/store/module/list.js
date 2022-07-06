import axios from "@/utils/request"
export default {
    namespaced:true,
    state:{
        newList:[]

    },
    mutations:{
        NewLists(state,payload){
            console.log('payload', payload);
            state.newList = payload

        }

    },
    actions:{
        async getNewList(context,cataId){
            let {data:{data:{results}}} = await axios.get(`articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
            console.log(results);
            context.commit('NewLists',results)
        }

    }
}