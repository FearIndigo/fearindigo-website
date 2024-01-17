<template>
  <header>
    <div
      class="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8"
    >
      <img
        alt="Fear Indigo Logo"
        src="/logo.svg"
        width="208"
        class="w-52 h-auto lg:w-64"
      />

      <div
        class="flex flex-col space-y-8 justify-center items-center text-center lg:text-left lg:items-start"
      >
        <h2 class="text-2xl font-sans font-bold">
          Website and Game<br />
          Development
        </h2>

        <nav class="flex divide-x divide-green">
          <RouterLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="[&:not(.router-link-active)]:text-green-dark [&.router-link-active]:bg-indigo transition-colors duration-500 ease-out py-2 px-4 hover:bg-indigo-300"
            >{{ link.name }}</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const links = ref([
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
]);
</script>
