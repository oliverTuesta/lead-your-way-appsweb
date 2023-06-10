<template>
  <!--
  <div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-orange-500 font-bold text-5xl mb-3">{{ $t('get-started-slogan') }}</div>
        <div class="text-700 text-2xl mb-5">
          {{ $t('get-started-content') }}
        </div>
        <div class="i-container">
            <div class="discord-gif">
              <img src="src/assets/img/discordblack.gif" alt="Discord gif" />
              <div class="text-orange-500 font-bold mb-3">>&nbsp;Powered by Discord</div>
            </div>
          </div>
        <a href="/signup"
          ><Button
            label="Join Now"
            icon="pi pi-external-link"
            class="font-bold px-5 py-3 p-button-raised bg-orange-400 border-orange-500 p-button-rounded white-space-nowrap"
          ></Button>
        </a>
      </div>
    </div>
  </div>-->
  <div class="testimonial">
    <div class="testimonialtop">
      <h1 class="font-semibold text-900 text-orange-500">{{ $t('get-started-slogan') }}</h1>
      <!--<p class="text-700 mb-5">{{ $t('get-started-content') }}</p>-->
    </div>
    <div class="contenedortestimonial">
      <div class="testimonialtext">
        <!--
        <div class="title-test">
          <h2>El apoyo que necesitaba para encontrar mi nuevo hogar</h2>
        </div>
        -->
        <div class="cuerpo-test">
          <p class="text-900 text-xl">
            {{ $t('get-started-content') }}
          </p>
          <div class="text-orange-500 font-bold mb-3">>&nbsp;Powered by Discord</div>
        </div>
        <!--
        <div class="autor-test">
          <h4>Brooklyn Simmons</h4>
          <p>Artista</p>
        </div>
      -->
      </div>
      <div class="testimonialimg">
        <img src="src/assets/img/discordblack.gif" alt="Gif del logo de discord" />
      </div>
    </div>
    <a id="signup_button" href="/signup"
          ><Button
            label="Join Now"
            icon="pi pi-external-link"
            class="font-bold px-5 py-3 p-button-raised bg-orange-400 border-orange-500 p-button-rounded white-space-nowrap"
          ></Button>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*Testimonial*/
.testimonial {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.testimonialtop {
  text-align: center;
  width: 100%;
  /*background-color: red;*/
}

.testimonialtop h1 {
  font-weight: bold;
  font-size: 40px;
}

.testimonialtop p {
  text-align: center;
  color: gray;
}

.contenedortestimonial {
  justify-content: space-between;
  align-items: center;
  position: relative;
  display: flex;
  /*background-color: blue;*/
  margin-left: 50px;
  margin-right: 50px;
}

.testimonialimg {
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonialimg img {
  height: 250px;
}

.testimonialtext {
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
}

</style>
