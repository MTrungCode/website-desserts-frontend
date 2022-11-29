<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div id="app">
    <div class="flex flex-col h-screen">
      <AppHeader />      
      <main class="flex-grow">
        <router-view />
      </main>
      <footer class="bg-gray-200 text-center lg:text-left">
        <div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
          2022 Copyright By Nguyễn Minh Trung
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
