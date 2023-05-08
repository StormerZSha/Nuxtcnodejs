<template>
    <div class="header-container">
        <div class="header">
            <img :src="cnodejsvg" title="cnodejs.svg" @click="toIndex" />
            <el-button link @click="openDialog">关于</el-button>
        </div>
        <client-only>
            <el-dialog title="关于" v-model="dialogShow" size="tiny" width="35%" class="aboutdialog">
                <div class="dialogcontnet">
                    <div class="line">
                        <span class="title" @click="toOriginproject">原项目源码</span>
                    </div>
                    <div class="line">
                        <span class="title" @click="toMyproject">本项目源码</span>
                    </div>
                    <div class="line">
                        <span>技术栈：</span>
                        <ul>
                            <li>Vue3</li>
                            <li>Nuxt3</li>
                            <li>Pinia</li>
                            <li>Cnodejs API</li>
                        </ul>
                    </div>
                </div>
            </el-dialog>
        </client-only>
    </div>
</template>
<script setup>
import cnodejsvg from '~/assets/cnodejs.svg'

import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
let dialogShow=ref(false)

const toIndex=()=>{
    router.push('/')
}
const openDialog=()=>{
    dialogShow.value=true
}
const toOriginproject=()=>{
    window.open('https://github.com/shuiRong/VueCnodeJS')
}
const toMyproject=()=>{
    window.open('https://github.com/StormerZSha/Nuxtcnodejs')
}
</script>
<style lang="scss" scoped>
.header{
    background: #324057;
    height: 3.6rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 10rem;
        height: 3.5rem;
        margin-left: 10rem;
    }
    button{
        line-height: 3.6rem;
        margin-right: 10rem;
        font-weight: 600;
        font-size: 20px;
        color: #fff;
        letter-spacing: 2px;
        padding-top: 0.2rem;
    }
}
.aboutdialog{
    font-size: 17px;
    .title{
        color:blue;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
            font-style: italic;
        }
    }
    ul{
        margin-left: 1rem;
    }
}
</style>