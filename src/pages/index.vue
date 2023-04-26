<template>
    <div class="secDiv" v-loading="loading">
        <div v-for="item in useindex.articleLists.data" :key="item.id">
            <div class="imgDiv">
                <!-- <img :src="item.author.avatar_url" :title="item.author.loginname"/> -->
                <img :src="1" :title="item.author.loginname" @click="toUser(item)"/>
            </div>
            <div class="textDiv">
                <div @click="toTopic(item)">{{ item.title }}</div>
                <div class="stuff">
                    <span>回复:{{ item.reply_count }}</span>
                    <span>创建于:{{ dayjs(item.create_at).format('YYYY-MM-DD hh:mm:ss') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useRouter} from 'vue-router'
import { getTopic } from '~/api';
import useIndex from '~/store'
import dayjs from 'dayjs'
const router=useRouter()
onMounted(()=>{
    getTopicData()
    window.addEventListener('scroll',scrollEvent)
})
let loading=ref(true)
const useindex=useIndex()
let limit=ref(10)
const getTopicData=async ()=>{
    loading.value=true
    const res=await getTopic({page:1,limit:limit.value,mdrender:false})
    useindex.setArticleList(res.data)
    loading.value=false
}
const scrollEvent=()=>{
      let scrollTop=document.documentElement.scrollTop
      let clientHeight=document.documentElement.clientHeight
      let scrollHeight=document.documentElement.scrollHeight
      if (scrollTop + clientHeight === scrollHeight){
        limit.value+=10
        getTopicData()
      }
}
const toTopic=(item)=>{
    router.push('/topic/'+item.id)
}
const toUser=(item)=>{
    router.push('/user/'+item.author.loginname)
}
</script>
<style scoped lang="scss">
    .secDiv{
        width: 60%;
        background-color: #f9fafc;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        font-size: 22px;
        padding: 2rem;
        min-height: 40rem;
        margin: 80px auto 0;
        &>div{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0.5rem 0;
            border-bottom: 2px solid #c0ccda;
            padding-bottom: 1rem;
            .imgDiv{
                width: 4rem;
                height: 4rem;
                margin-right: 2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .textDiv{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                &>div{
                    font-size: 25px;
                    cursor: pointer;
                    :visited{
                        color: #ccc;
                    }
                }
                .stuff{
                    font-size: 17px;
                    margin-top: 1rem;
                    color: #8492a6;
                    span:first-child{
                        margin-right: 2rem;
                    }
                }
            }
        }
    }
</style>