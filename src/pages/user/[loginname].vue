<template>
    <div class="secDiv">
        <div class="profile" v-loading="loading">
            <div class="msg">
                <img src="" :alt="useindex.currentUser?.loginname"/>
                <span>{{ useindex.currentUser?.loginname }}</span>
            </div>
            <div class="score">
                <img :src="moneypng"  alt="积分图标"/>
                <span>积分:{{ useindex.currentUser?.score }}</span>
            </div>
            <div class="github">
                <img :src="githubpng" alt="github图标"/>
                <span>Github:{{useindex.currentUser?.githubUsername}}</span>
            </div>
            <div class="time">
                <img :src="timepng"  alt="时间图标"/>
                <span>注册时间:{{ dayjs(useindex.currentUser?.create_at).format('YYYY/MM/DD hh:mm:ss') }}</span>
            </div>
        </div>
        <div class="recentReply" v-loading="loading">
            <div>最近参与的话题</div>
            <div v-for="(item,index) in useindex.currentUser?.recent_replies" :key="index" class="item">
                <div v-if="index<4">
                    <img :src="item.author.avatar_url" :title="item.author.loginname" @click="toUser(item)" />
                    <div class="title">
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
        <div class="recentTopic" v-loading="loading">
            <div>最近创建的话题</div>
            <div v-for="(item,index) in useindex.currentUser?.recent_topic" :key="index" class="item">
                <div v-if="index<4">
                    <img :src="item.author.avatar_url" :title="item.author.loginname" @click="toTopic(item)"/>
                    <div class="title">
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter,useRoute } from 'vue-router';
import {ref,onMounted } from 'vue'
import {getUser} from '~/api'
import useIndex from '~/store';

import dayjs from 'dayjs'
import moneypng from '~/assets/money.png'
import githubpng from '~/assets/github.png'
import timepng from '~/assets/time.png'
import { authorType } from '~/type';
onMounted(()=>{
    getUserData()
})

const router=useRouter()
const route=useRoute()
let loading=ref(true)
const useindex=useIndex()

const getUserData=async()=>{
    loading.value=true
    const res=await getUser({loginname:route.path.slice(6)})
    let data=res.data.value as{data:any,code:number}
    useindex.setCurrentuser(data.data)
    loading.value=false
    console.log(useindex.currentUser?.loginname);
    
}

const toUser=(item:any)=>{
    router.push('/user/'+item.author.loginname)
}

const toTopic=(item:any)=>{
    router.push('/topic/'+item.id)
}
</script>
<style lang="scss">
.secDiv{
    padding: 0;
    box-sizing: border-box;
    border: none;
    width: 60%;
    margin: 127px auto;
    .profile{
        padding: 1rem;
        background-color: #eff2f7;
        border-radius: 0.3rem;
        >div{
            margin-bottom: 1.5rem;
            span{
                font-size: 25px;
                color: #000;
                margin-left: 1rem;
            }
        }
        .score,.github,.time{
            display: flex;
            align-items: center;
            color: grey;
            margin: 0.5rem 0;
            font-size: 20px;
            img{
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }
    .recentReply,.recentTopic{
        background-color: #d3dce6;
        padding: 1rem;
        border-radius: 0.3rem;
        img{
            width: 5rem;
            height: 5rem;
        }
        .title{
            margin-bottom: 1rem;
            color: #000;
            padding-bottom: 1.5rem;
            font-size: 25px;
        }
        .item{
            border-bottom: 2px solid #99a9bf;
        }
    }
    .recentTopic{
        margin-top: 1rem;
        background-color: #e5e9f2;
    }
}
</style>