<template>
  <Card class="h-auto max-w-15rem">
    <template #header>
      <img class="bg-cover bg-center h-15rem w-full border-round-top" :alt="name" :src="image" />
    </template>
    <template #title
      ><p class="text-center">{{ name }}</p></template
    >
    <template #subtitle
      ><p class="text-center">{{ role }}</p></template
    >
  </Card>
</template>

<script>
export default {
  props: {
    name: String,
    role: String,
    image: String,
  },
};
</script>

<style scoped></style>
