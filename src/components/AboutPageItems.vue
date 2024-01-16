<template>
  <div class="w-full flex flex-col space-y-8 items-center justify-center">
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
        class="text-green-dark"
        >contact@fearindigo.com.au</a
      >
    </PageItem>
  </div>
</template>

<script setup>
import PageItem from "@/components/PageItem.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
</script>
