<template>
    <nav data-testid="qa-nav">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <a :href="item.href">{{ item.text }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { NavComponent } from "../interfaces/Components";

const props = defineProps<NavComponent>();

const { items } = props;
</script>

<style lang="">
    
</style>