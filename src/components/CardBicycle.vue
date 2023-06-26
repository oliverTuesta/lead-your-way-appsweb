<template>
  <div class="card-container">
    <Card class="bike-card">
      <template #header>
        <div class="image-container">
          <img class="header-image" :alt="name" :src="image" />
        </div>
      </template>
      <template #title>
        <h3 class="bike-name">{{ name }}</h3>
      </template>
      <template #content>
        <p class="bike-details">{{ content }}</p>
        <Rating :value="average" :cancel="false" readonly />
      </template>
      <template #footer>
        <div class="footer-content">
          <span class="price">S/. {{ price }}</span>
          <a :href="`/rent`" @click="saveBike()">
            <Button
              icon="pi pi-check"
              label="Rentar"
              class="rent-button"
              id="btn-rent"
              v-if="isAvailable"
            />
            <Button
              icon="pi pi-times"
              label="No Disponible"
              class="rent-button"
              id="btn-rent"
              v-else
              disabled
            />
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import { rentService } from '../services/rent.lyw.service';
const value = ref(null);
export default {
  data: () => ({
    isAvailable: true,
    startDate: localStorage.getItem('startDate') || '',
    endDate: localStorage.getItem('endDate') || '',
  }),
  methods: {
    saveBike() {
      localStorage.setItem('bicycleId', this.id);
    },
  },
  components: {
    Card,
    Button,
    Rating,
  },
  setup() {
    const average = ref(3);
    return {
      average,
    };
  },
  props: {
    id: Number,
    name: String,
    content: String,
    price: String,
    image: String,
    averageRating: Number,
  },
  async mounted() {
    try {
      const isAvailable = await rentService.bikeAvailable(this.id, this.startDate, this.endDate);
      this.isAvailable = isAvailable;
    } catch (error) {
      this.isAvailable = false;
    }
  },
};
</script>
<style scoped>
.bike-card {
  width: 20em;
  height: 100%;
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.bike-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.header-image {
  width: 100%;
  height: 12em;
  object-fit: cover;
}
.bike-name {
  margin-bottom: 0.25em;
}

.bike-details {
  font-size: 0.9em;
  color: #777;
  margin-top: 0;
  margin-bottom: 0.5em;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-weight: bold;
  font-size: 1.2em;
}

.rent-button {
  background-color: #f96332;
  color: white;
  font-weight: bold;
  border: none;
}
</style>
