<template>
  <HeaderComponent class="mb-5" />
  <div class="search-container">
    <div class="search-wrapper">
      <InputText v-model="searchText" placeholder="Buscar bicicleta" />
      <Button label="Buscar" class="search-button bg-orange-400"/>
    </div>
    <div class="cards-wrapper">
      <CardBicycle
        v-for="cards in filteredCards"
        :key="cards.name"
        :name="cards.name"
        :content="cards.content"
        :price="cards.price"
        :image="cards.image"
        :average-rating="cards.averageRating"
      />
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import CardBicycle from '../components/CardBicycle.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  data: () => ({
    cardsBicycle: [
      {
        name: 'SINTESI 906 29"',
        content: 'MTB pro aluminio / hidráulico',
        price: 'S/. 1,749.00',
        image:
          'https://anzabikes.com/cdn/shop/products/Negrocover_48c940a9-26e2-4fe8-b782-ac9e03c05dea_large.jpg?v=1636056722',
        averageRating: 4,
      },
      {
        name: 'VINTAGE BONITA',
        content: 'Paseo acero / 6 velocidades',
        price: 'S/. 599.00',
        image:
          'https://anzabikes.com/cdn/shop/products/Negro-sin-fondo-sin-parrilla_1024x1024.png?v=1621965619',
        averageRating: 4,
      },
      {
        name: 'TRACK PACIFICO',
        content: 'Track urbana de aluminio',
        price: 'S/. 1,329.00',
        image: 'https://anzabikes.com/cdn/shop/products/Pacifico_large.jpg?v=1620750984',
        averageRating: 2,
      },
      {
        name: 'TRACK PANCA',
        content: 'Track Urbana de Aluminio',
        price: 'S/. 1,329.00',
        image: 'https://anzabikes.com/cdn/shop/products/IMG_1675-Panca_large.jpg?v=1635966763',
        averageRating: 5,
      },
      {
        name: 'TRACK LIMA',
        content: 'bicicleta Track urbana de aluminio',
        price: 'S/. 1,329.00',
        image: 'https://anzabikes.com/cdn/shop/products/IMG_1679-Lima_large.jpg?v=1676580490',
        averageRating: 3,
      },
      {
        name: 'TRACK HUASCARAN',
        content: 'Track urbana de aluminio',
        price: 'S/. 1,329.00',
        image:
          'https://anzabikes.com/cdn/shop/products/Track-Huascaran_7c2029c1-723b-489e-a1ea-ce3ed6f0f4e2_large.png?v=1600206878',
        averageRating: 5,
      },
      {
        name: 'FIXIE PANTERA',
        content: 'Fixie urbana de acero',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/Fixie-Pantera_large.png?v=1596165316',
        averageRating: 4,
      },
      {
        name: 'FIXIE MODELO X',
        content: 'Fixie urbana de acero',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/IMG_1676-X_large.jpg?v=1635960969',
        averageRating: 2,
      },
      {
        name: 'FIXIE CAVERO',
        content: 'Fixie urbana de acero XS',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/IMG_1678-Cavero_large.jpg?v=1635956611',
        averageRating: 1,
      },
      {
        name: 'FIXIE CÓNDOR',
        content: 'Fixie urbana de acero',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/Fixie-Condor_large.png?v=1596164736',
        averageRating: 3,
      },
      {
        name: 'FIXIE PISCO',
        content: 'Fixie urbana de acero',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/Fixie-Pisco_large.png?v=1635961674',
        averageRating: 4,
      },
      {
        name: 'FIXIE LAGUNA',
        content: 'Fixie urbana de acero',
        price: 'S/. 979.00',
        image: 'https://anzabikes.com/cdn/shop/products/Fixie-Laguna_large.png?v=1596166991',
        averageRating: 5,
      },
      {
        name: 'ZEGA MIXTE CASI AZUL',
        content: 'Bicicleta Urbana',
        price: 'S/. 1235.00',
        image: 'https://anzabikes.com/cdn/shop/products/lucessaga_large.jpg?v=1643953464',
        averageRating: 4,
      },
    ],
    searchText: '',
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
