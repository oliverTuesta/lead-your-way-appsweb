<template>
  <HomeHeader />
  <div class="notfound-container">
    <div class="full-width-container">
    <img src="../assets/img/bicycle.gif" alt="404" class="full-width-image" />
  </div>
  <div class="after-fw">
    <h1>{{ $t('NotFound') }}</h1>
    <p>
      {{ $t('NotFoundMessage') }}
    </p>
    <a href="/">
      <Button class="button-nt">{{ $t('NotFoundButton') }}</Button>
    </a>
  </div>
  </div>
</template>

<script setup>
import HomeHeader from '@/components/home/HomeHeader.vue';
</script>
<script>
export default {
  name: 'NotFoundView',
};
</script>

<style>

.notfound-container {
  margin-bottom:260px;
}

.button-nt {
  background-color: #E16F58;
  color: white;
  border-color: #E16F58;
  margin-bottom: 20px;
}

.button-nt:enabled:hover {
    background-color: #817E9F;
    color: white;
    border-color: #817E9F;
    box-shadow: 0 0 0 0.2rem rgba(100, 100, 100, 0.2);
}

.full-width-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-width-image {
  /*
    width: 100%;
    height: 100%;
    */
  height: auto;
}

.after-fw {
    text-align: center;
  justify-content: center;
}
</style>
