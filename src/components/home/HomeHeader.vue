<template>
  <Toolbar class="p-1">
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline" style="color:#E16F58"> Lead Your Way </a>
    </template>

    <template #end>
      <a href="/login"> <Button class="mr-2 text-bold" style="background-color:#817E9F; border-color: #817E9F;">{{$t('login')}}</Button> </a
      ><a href="/signup">
        <Button class="mr-2" severity="warning" style="background-color: #E16F58; border-color: #E16F58;">{{$t('register')}}</Button>
      </a>
    </template>
  </Toolbar>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
