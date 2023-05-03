<template>
  <Toolbar class="p-1">
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline"> Lead Your Way </a>
    </template>

    <template #end>
      <a href="/login"> <Button class="mr-2 text-bold">{{$t('login')}}</Button> </a
      ><a href="/signup">
        <Button class="mr-2" severity="warning">{{$t('register')}}</Button>
      </a>
    </template>
  </Toolbar>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
