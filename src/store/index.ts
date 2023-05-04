import {defineStore} from 'pinia'
import {articleType,userinfoType} from '~/type'
const useIndex=defineStore("index",{
    state(){
        return{
            articleLists:[] as Array<articleType>,
            articleNumber:10,
            currentUser:null as userinfoType|null
        }
    },
    actions:{
       setArticleList(articles:Array<articleType>){
        this.articleLists=articles
       },
       setCurrentuser(user:userinfoType|null){
        this.currentUser=user
       }
    }

})

export default useIndex