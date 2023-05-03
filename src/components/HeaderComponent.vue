<template>
  <Toolbar class="p-1">
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline"> Lead Your Way </a>
      <a href="/search"> Search Bicycles </a>
    </template>

    <template #end>
      <a href="/profile/olivertuesta"> <Button class="mr-2 text-bold">Profile</Button> </a>
    </template>
  </Toolbar>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
