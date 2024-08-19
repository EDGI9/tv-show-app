<template>
  <button @click="$emit('click')" data-testid="qa-button">{{ text }}</button>
</template>

<script setup lang="ts">
import { ButtonComponent } from '../interfaces/Components';

const props = defineProps<ButtonComponent>();

const { text } = props;
</script>

<style lang=""></style>
