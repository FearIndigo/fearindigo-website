<script setup>
import PageItem from "./PageItem.vue";
import IconWebsites from "./icons/IconWebsites.vue";
import IconGames from "./icons/IconGames.vue";
</script>

<template>
  <PageItem>
    <template #icon>
      <IconWebsites />
    </template>
    <template #heading>Websites</template>
    We specialise in lightwieght, content first static websites. They load fast,
    are easy to edit, and free to host.
    <br />
    See the
    <a href="https://BowenCode.com.au" target="_blank" title="BowenCode Website"
      >BowenCode website</a
    >
    for an example.
  </PageItem>

  <PageItem>
    <template #icon>
      <IconGames />
    </template>
    <template #heading>Games</template>
    We can develop simple games for Windows, Linux, Android and Web.
    <br />
    Check out the early access version of
    <a
      href="https://play.google.com/store/apps/details?id=com.FearIndigo.AussieBallQuantum"
      target="_blank"
      title="Sports Brawl on Google Play"
      >Sports Brawl</a
    >
    on the google play store.
  </PageItem>
</template>
