<template>
  <HeaderComponent class="mb-5" />
  <div class="search-container">
    <div class="search-wrapper">
      <InputText v-model="searchText" placeholder="Buscar bicicleta" />
      <Button label="Buscar" class="search-button bg-orange-400" />
    </div>
    <div class="cards-wrapper">
      <CardBicycle
        v-for="cards in filteredCards"
        :key="cards.id"
        :name="cards.name"
        :content="cards.description"
        :price="cards.price"
        :image="cards.image"
        :average-rating="cards.averageRating"
        :id="cards.id"
      />
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import CardBicycle from '../components/CardBicycle.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { bicycleService } from '../services/bicycle.lyw.service';
export default {
  data: () => ({
    cardsBicycle: [],
    searchText: '',
    //bicycleApiService: new BicycleApiService(),
  }),
  components: {
    InputText,
    Button,
    CardBicycle,
    HeaderComponent,
  },
  computed: {
    filteredCards() {
      const searchText = this.searchText.toLowerCase();
      return this.cardsBicycle.filter((card) => {
        return (
          card.name.toLowerCase().includes(searchText) ||
          card.content.toLowerCase().includes(searchText) ||
          card.price.toLowerCase().includes(searchText)
        );
      });
    },
  },
  async mounted() {
    //const bicycleApiService = new bicycleService();
    try {
      this.cardsBicycle = await bicycleService.getAll();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.search-button {
  background-color: #e16f58;
  color: white;
  font-weight: bold;
  border: 2px solid #e16f58;
  border-radius: 5px;
  box-shadow: 0 0 5px #e16f58;
}
button.search-button:hover {
  background-color: #d65228;
  border: 2px solid #e16f58;
  border-radius: 5px;
  box-shadow: 0 0 5px #e16f58;
}
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  gap: 2rem;
  max-width: 80%;
  margin: 0 auto;
  justify-content: center;
}
</style>
