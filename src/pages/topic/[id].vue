<template>
    <h2>article</h2>
</template>
<script setup>
    import { onMounted } from 'vue';
    import {useRoute} from 'vue-router';
    const route=useRoute()
    onMounted(()=>{
        console.log(route);
    })
</script>