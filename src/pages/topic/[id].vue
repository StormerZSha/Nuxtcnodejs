<template>
    <div class="topic" v-loading="loading">
        <div class="marginSpan">发布于:{{ dayjs(useindex.currentTopic?.create_at).format('YYYY/MM/DD hh:mm:ss') }}</div>
        <div class="marginSpan">浏览量:{{ useindex.currentTopic?.visit_count }}</div>
        <div class="author" @click="toUser(useindex.currentTopic?.author.loginname)">作者:{{ useindex.currentTopic?.author.loginname }}</div>
        <span class="tab">来自:{{ useindex.currentTopic?.tab }}</span>
        <h3>{{ useindex.currentTopic?.title }}</h3>
        <div v-html="useindex.currentTopic?.content" id="content"></div>
        <div id="reply">
            <div v-for="(item,index) in useindex.currentTopic?.replies" class="replySec" :key="index">
                <img :src="item.author.avatar_url"  class="avatar" @click="toUser(item.author.loginname)"/>
                <div>
                    <div class="replyUp">
                        <span class="replyName">{{ item.author.loginname }}</span>
                        <span>{{ dayjs(item.create_at).format('YYYY/MM/DD hh:mm:ss') }}</span>
                        <span v-if="item.ups.length>0" class="thumbsClass">
                            <img class="thumb" :src="thumbpng" />
                            <span>{{ item.ups.length }}</span>
                        </span>
                    </div>
                    <div v-html="item.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { onMounted,ref } from 'vue';
    import {useRoute,useRouter} from 'vue-router';
    import { getCurrentTopic } from '~/api';
    import useIndex from '~/store';
    import dayjs from 'dayjs'
    import thumbpng from '~/assets/thumb.png'
    const route=useRoute()
    const router=useRouter()
    const useindex=useIndex()
    let loading=ref(true)
    onMounted(()=>{
        getCurrentTopicData()
    })

    const getCurrentTopicData=async()=>{
        loading.value=true
        const res=await getCurrentTopic({id:route.path.slice(7)})
        let data=res.data.value as {data:any,code:number}
        useindex.setCurrentTopic(data.data)
        loading.value=false
    }

    const toUser=(item:any)=>{
        router.push('/user/'+item)
    }
</script>
<style lang="scss" scoped>
.topic{
    width: 60%;
    background: #f9fafc;
    border: 1px solid #ddd;
    font-size: 20px;
    padding: 2rem;
    color: #f00;
    margin: 57.59px auto 0;
    div{
        font-size: 17px;
        color: #8492a6;
    }
    .author{
        color: #000;
        cursor: pointer;
    }
    .tab{
        margin-left: 0;
    }
    #content{
        margin: 2rem auto;
        padding: 2rem 1rem;
        border: 1px solid #ddd;
        line-height: 1.6;
        padding-bottom: 1rem;
        background: #eff2f7;
        img{
            max-width: 100%;
            min-height: 100%;
        }
    }
    #reply{
        display: flex;
        flex-direction: column;
        .replySec{
            box-sizing: border-box;
            display: flex;
            border-bottom: 2px solid #c0ccda;
            width: 100%;
            margin: 0.5rem auto;
            padding: 1rem 0;
            .avatar{
                width: 5rem;
                height: 5rem;
                margin-right: 1rem;
                cursor: pointer;
            }   
            &>div{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 1rem;
                justify-content: space-around;
            }
            .replyName{
                color: #475669;
                font-size: 20px;
            }
            p{
                font-size: #000;
            }
            .thumbsClass{
                float: right;
                display: flex;
                img{
                    width: 1.3rem;
                    height: 1.3rem;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
<style lang="scss">
#content{
    img{
        max-width: 100%;
    }
}
.replySec{
    img{
        max-width: 100%;
    }
}
</style>