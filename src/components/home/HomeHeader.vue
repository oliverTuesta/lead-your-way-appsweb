<template>
  <Toolbar class="p-1">
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline" style="color: #e16f58">
        Lead Your Way
      </a>
    </template>
    <template #end>
      <a href="/login">
        <Button class="mr-2 text-bold" style="background-color: #817e9f; border-color: #817e9f">{{
          $t('login')
        }}</Button> </a
      ><a href="/signup">
        <Button
          class="mr-2"
          severity="warning"
          style="background-color: #e16f58; border-color: #e16f58"
          >{{ $t('register') }}</Button
        >
      </a>
    </template>
  </Toolbar>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
