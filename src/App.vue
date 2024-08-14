<script setup lang="ts">
import Button from './components/Button.vue'
import ImageFrame from './components/ImageFrame.vue'
import Nav from './components/Nav.vue'
import List from './components/List.vue'
import Description from './components/Description.vue'
import Title from './components/Title.vue'

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <Button text="My button" @click="console.log('here')" />
    <ImageFrame src="asdasd" alt="asdasd" />
    <Nav :items="[{text: 'item', href: 'href'}]"></Nav>
    <List>
      <li>
        Item 1
      </li>
      <li>
        Item 2
      </li>
    </List>
    <Description text="My Description"/>
    <Title text="My Title" type="h1" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
