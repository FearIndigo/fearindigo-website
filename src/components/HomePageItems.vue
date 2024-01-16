<template>
  <div class="w-full flex flex-col space-y-8 items-center justify-center">
    <PageItem>
      <template #icon>
        <IconWebsites />
      </template>
      <template #heading>Websites</template>
      We specialise in lightweight, content first static websites.
    </PageItem>

    <PageItem>
      <template #icon>
        <IconGames />
      </template>
      <template #heading>Games</template>
      We can develop simple games for Windows, Linux, Android and Web.
    </PageItem>
  </div>
</template>

<script setup>
import PageItem from "@/components/PageItem.vue";
import IconWebsites from "@/components/icons/IconWebsites.vue";
import IconGames from "@/components/icons/IconGames.vue";
</script>
