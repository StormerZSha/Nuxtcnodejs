import {defineStore} from 'pinia'
import {articleType} from '~/type'
const useIndex=defineStore("index",{
    state(){
        return{
            articleLists:[] as Array<articleType>,
            articleNumber:10
        }
    },
    actions:{
       setArticleList(articles:Array<articleType>){
        this.articleLists=articles
       }
    }

})

export default useIndex