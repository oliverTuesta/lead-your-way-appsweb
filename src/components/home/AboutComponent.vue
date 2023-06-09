<template>
  <!--
  <section>
    <div class="card-container flex-wrap flex gap-2 justify-content-center align-items-center">
      <div class="sm:max-w-max md:max-w-30rem sm:p-2">
        <div class="text-center text-2xl">
          <h1 class="font-semibold text-900"><span class="text-orange-500">Lead</span> Your way</h1>
        </div>
        <p class="text-800">
          {{ $t('about-content') }}
        </p>
      </div>
      <div class="card-container blue-container overflow-hidden p-5">
        <img
          class="g-auto bg-no-repeat bg-center bg-blue-500 border-round h-auto w-full md:w-20rem"
          src="https://i.ytimg.com/vi/qQQbgribKbU/maxresdefault.jpg"
          alt=""
        />
      </div>
    </div>
  </section>-->
  <div class="about-component">
    <div class="first-part">
      <div>
        <h1 class="font-semibold text-900"><span class="text-orange-500">Lead</span> Your way</h1>
        <p>{{ $t('about-content') }}</p>
        <div class="buttons">
          <!--
          <button>Botón 1</button>
          <button>Botón 2</button>
          -->
        </div>
      </div>
    </div>
    <div class="second-part">
      <div class="carousel">
        <img :src="currentImage" alt="Imagen del carrusel" />
        <button class="next-button" @click="nextImage">
          <div class="i-container">
            <i class="fa-solid fa-angle-right" style="color: #f97316"></i>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'src/assets/img/bikes/bmc_bike2.png',
        'src/assets/img/bikes/phoenix_bike.png',
        'src/assets/img/bikes/city_bike.png',
      ],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextImage();
    }, 10000); //Milisegundos -> 10 segundos
  },
};
</script>

<style scoped>
.about-component {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 40% 60%;
}

.first-part {
  display: flex;
  align-items: center;
  padding: 20px;
}

.first-part div {
  margin-right: 20px;
}

.first-part h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.buttons button {
  margin-top: 10px;
}

.second-part {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /*background-color: red;*/
}

.carousel {
  position: relative;
  max-width: 100%;
}

.carousel img {
  width: 100%;
  background-color: transparent;
}

.next-button {
  position: absolute;
  top: 50%;
  right: 0;
  border: none;
  background-color: transparent;
  transform: translateY(-50%);
  cursor: pointer;
}

.i-container {
  font-size: 30px;
}
</style>
