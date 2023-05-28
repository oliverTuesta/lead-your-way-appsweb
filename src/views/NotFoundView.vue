<template>
  <HomeHeader />
  <!--<div class="h-screen"></div>-->
  <!--<div class="flex justify-center align-items-center">
      
    </div>
    <div>
    </div>-->
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
      <Button class="buttonmain">{{ $t('NotFoundButton') }}</Button>
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

.buttonmain {
  background-color: orange;
  color: white;
  border-color: orange;
  margin-bottom: 20px;
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
