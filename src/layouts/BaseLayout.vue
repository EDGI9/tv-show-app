<template lang="">
    <header class="c_base_layout_header">
      <ImageFrame src="/logo.svg" class="c_base_layout_header_logo"/>
      <Title text="Header" type="h2" class="c_base_layout_header_title"/>
    </header>
    <main class="c_base_layout_main">
      <router-view />
    </main>
    <footer class="c_base_layout_footer">
      <p>Footer</p>
    </footer>
</template>
<script setup>
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
</script>
<style lang="css">
  .c_base_layout_header {
    background-color: red; /*TODO: Don't forget to replace colors*/
    display: flex;
    gap: 50px;
    row-gap: 100px;
    padding: 0 30px 0 30px;
    align-items: center;
  }

  .c_base_layout_main {
    flex-grow: 1;
  }

  .c_base_layout_footer {
    background-color: red; /*TODO: Don't forget to replace colors*/
    display: flex;
    gap: 50px;
    row-gap: 100px;
    padding: 0 30px 0 30px;
    position: sticky;
    align-items: center;
    justify-content: center;
  }

  .c_base_layout_header_logo {
    width: 40px;
    height: 40px;
    filter: invert(100%)
  }


</style>