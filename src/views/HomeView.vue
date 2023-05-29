<script setup>
import HomeHeader from '@/components/home/HomeHeader.vue';
import ContactComponent from '@/components/home/ContactComponent.vue';
import TeamComponent from '@/components/home/TeamComponent.vue';
import AboutComponent from '@/components/home/AboutComponent.vue';
import BicycleTypesComponent from '../components/home/BicycleTypesComponent.vue';
import GetStarted from '@/components/home/GetStarted.vue';
</script>

<template>
  <HomeHeader />
  <div class="w-md justify-center mx-auto px-4">
    <AboutComponent />
    <BicycleTypesComponent />
    <TeamComponent />
    <GetStarted />
    <ContactComponent />
  </div>
</template>

<script>
export default {};
</script>

<style>
.w-md {
  max-width: 80rem;
}

</style>
