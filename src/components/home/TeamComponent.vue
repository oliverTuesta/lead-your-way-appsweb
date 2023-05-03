<script setup>
import DeveloperCard from '@/components/home/DeveloperCard.vue';
</script>

<template>
  <h2 class="text-center text-2xl">{{$t('meet-our-team')}}</h2>
  <div class="card-container flex-wrap flex gap-4 justify-content-center">
    <DeveloperCard
      v-for="developer in developers"
      :key="developer.name"
      :name="developer.name"
      :role="developer.role"
      :image="developer.image"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    developers: [
      {
        name: 'Oliver Tuesta',
        role: 'CTO',
        image: '/src/assets/img/Oliver.jpg',
      },
      {
        name: 'Lucas Ruiz',
        role: 'CEO',
        image: '/src/assets/img/Lucas.jpg',
      },
      {
        name: 'Arnol Cáceres',
        role: 'Technical Leader',
        image: '/src/assets/img/Arnol.png',
      },      
      {
        name: 'David Quito',
        role: 'Frontend Developer',
        image: '/src/assets/img/David.png',
      },
      {
        name: 'Leonel Alessandro',
        role: 'Frontend Developer',
        image: '/src/assets/img/Leonel.jpg',
      }
    ],
  }),
};
</script>

<style scoped></style>
