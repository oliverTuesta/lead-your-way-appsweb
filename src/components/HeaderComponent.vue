<template>
  <Toolbar class="p-1">
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline"> Lead Your Way </a>
    </template>

    <template #end>
      <a v-if="user" href="/profile"> <Button class="mr-2 text-bold">Profile</Button> </a>
      <a v-if="user" href="/create"> <Button class="mr-2 text-bold">Add Bike</Button> </a>
      <a href="/search">
        <Button class="mr-2 text-bold"> <i class="pi pi-search mr-2"></i> Search </Button>
      </a>
    </template>
  </Toolbar>
</template>
<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = localStorage.getItem('id');
  },
};
</script>
