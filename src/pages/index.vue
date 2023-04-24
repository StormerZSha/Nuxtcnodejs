<template>
    <h1>index</h1>
</template>
<script setup>
import { getTopic } from '~/api';

const res=await getTopic(1,1,false)
console.log(res.data);
</script>