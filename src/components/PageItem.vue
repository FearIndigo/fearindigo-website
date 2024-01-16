<template>
  <div class="flex space-x-4 items-center lg:space-x-4 w-full">
    <div
      class="h-7 w-7 aspect-square self-start flex items-center justify-center lg:w-16 lg:h-16 lg:self-auto text-orange"
    >
      <slot name="icon" />
    </div>
    <div class="flex flex-col space-y-2">
      <h3 class="text-xl text-orange">
        <slot name="heading" />
      </h3>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>
