<template>
  <div class="card-primary">
    <TabView :scrollable="true">
      <TabPanel header="Información General">
        <div class="flex flex-column gap-5 mt-3 mb-5 align-items-center height">
          <div class="card">
            <div class="flex flex-column gap-2">
              <label for="title" class="font-bold">Título</label>
              <InputText id="title" v-model="value" aria-describedby="username-help" />
              <small id="username-help">Ingrese el título de su publicación.</small>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 card">
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size1" name="bike" value="small" />
              <label for="size1" class="ml-2">Small</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size2" name="bike" value="medium" />
              <label for="size2" class="ml-2">Medium</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size3" name="bike" value="large" />
              <label for="size3" class="ml-2">Large</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size4" name="bike" value="xlarge" />
              <label for="size4" class="ml-2">X-Large</label>
            </div>
          </div>
          <div class="card flex flex-column">
            <label for="currency-per" class="font-bold block mb-2">Monto</label>
            <InputNumber v-model="value1" inputId="currency-per" prefix="S/ " />
          </div>
          <div class="card">
            <label for="description" class="font-bold block mb-2">Descripción</label>
            <Textarea inputId="description" v-model="value" rows="5" cols="30" />
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Ubicación">
        <div class="flex flex-column align-items-center gap-3 mt-3 mb-5 height">
          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map"></i>
            </span>
            <InputText placeholder="Ciudad" />
          </div>
          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map-marker"></i>
            </span>
            <InputText placeholder="Distrito" />
          </div>
          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map-marker"></i>
            </span>
            <InputText placeholder="Dirección" />
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Fotos">
        <div class="cardUpload mt-3 mb-5 height">
          <Toast />
          <FileUpload name="demo[]" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #header="{ chooseCallback, clearCallback, files }">
              <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                <div class="flex gap-2">
                  <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                  <Button
                    @click="clearCallback()"
                    icon="pi pi-times"
                    rounded
                    outlined
                    severity="danger"
                    :disabled="!files || files.length === 0"
                  ></Button>
                </div>
                <ProgressBar
                  :value="totalSizePercent"
                  :showValue="false"
                  :class="[
                    'md:w-20rem h-1rem w-full md:ml-auto',
                    { 'exceeded-progress-bar': totalSizePercent > 100 },
                  ]"
                  ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                >
              </div>
            </template>
            <template #empty>
              <p class="font-bold flex flex-column align-items-center">
                Arrastra aquí tus imagenes.
              </p>
            </template>
          </FileUpload>
          <Button label="Submit" icon="pi pi-check" class="mt-4" />
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  name: 'AddBikeView',
};
</script>

<style scoped>
.card-primary {
  display: block;
  margin: 0 auto;
  width: 80%;
}

.card {
  width: 270px;
}

.maxH {
  max-height: 50px;
}

.height {
  height: 70vh;
}
</style>
