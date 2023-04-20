<template>
    <div class="header">
        <img :src="cnodejsvg" title="cnodejs.svg" @click="toIndex" />
    </div>
    <el-button>关于</el-button>
</template>
<script setup>
import cnodejsvg from '~/asssets/cnodejs.svg'

import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
const toIndex=()=>{
    router.push('/')
}
</script>