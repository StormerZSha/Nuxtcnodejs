import {defineStore} from 'pinia'
import {articleType,userinfoType,currenttopicType} from '~/type'
const useIndex=defineStore("index",{
    state(){
        return{
            articleLists:[] as Array<articleType>,
            articleNumber:10,
            currentUser:null as userinfoType|null,
            currentTopic:null as currenttopicType|null
        }
    },
    actions:{
       setArticleList(articles:Array<articleType>){
        this.articleLists=articles
       },
       setCurrentuser(user:userinfoType|null){
        this.currentUser=user
       },
       setCurrentTopic(topic:currenttopicType|null){
        this.currentTopic=topic
       }
    }

})

export default useIndex