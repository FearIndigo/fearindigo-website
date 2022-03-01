<script setup>
import PageItem from "./PageItem.vue";
import IconLocation from "./icons/IconLocation.vue";
import IconEmail from "./icons/IconEmail.vue";
</script>

<template>
  <PageItem>
    <template #icon>
      <IconLocation />
    </template>
    <template #heading>Location</template>

    We are located in Perth, Western Australia.
  </PageItem>

  <PageItem>
    <template #icon>
      <IconEmail />
    </template>
    <template #heading>Contact</template>

    Contact us at
    <a
      href="mailto:contact@fearindigo.com.au?subject=Contact"
      title="Contact Us"
      >contact@fearindigo.com.au</a
    >
  </PageItem>
</template>
