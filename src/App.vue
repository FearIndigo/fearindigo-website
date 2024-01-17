<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
  <div
    class="flex justify-center items-center bg-gradient-to-b from-purple to-purple min-h-screen p-8 text-green overflow-hidden"
  >
    <div
      class="grid w-full h-full gap-16 grid-rows-[repeat(2,auto)] grid-cols-[auto] lg:grid-rows-[auto] lg:grid-cols-[repeat(2,auto)] max-w-[1000px] mx-auto items-center"
    >
      <SiteHeader />

      <main
        class="relative w-80 h-80 mx-auto flex flex-col items-center justify-center"
      >
        <RouterView v-slot="{ Component, route }">
          <Transition>
            <Component :is="Component" :key="route.path" />
          </Transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style>
@import "index.css";
</style>
