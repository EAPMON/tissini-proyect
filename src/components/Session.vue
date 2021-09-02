<template>
  <div>
    <v-card class="d-flex justify-center mb-6" flat tile>
      <v-card class="pa-2 elevation-0" tile>
        <v-img :src="baseUrlImage + session.image"></v-img>
        <v-carousel v-model="model" class="mt-3"  height="600" hide-delimiter-background>
          <v-carousel-item class="d-flex justify-center"  max-width="400" v-for="(count, i) in Math.ceil(session.products.length/4)" :key="i">
              <v-row class="fill-height"  justify="center">
                <v-col cols="6" v-for="(product, i) in session.products.slice(4*model,4*model+4)" :key="i">
									<v-card class="elevation-0">
										<v-img :src="baseUrlImage + product.image.url"></v-img>
										<v-card-title class="pa-0">{{product.name}}</v-card-title>
										<v-card-text class="px-4 d-flex justify-start">
											<v-row>
												<div class=" text-subtitle-1">{{product.categories.category}}</div>
											</v-row>
										</v-card-text>
										<v-card-text class="px-4 d-flex justify-start">
											<v-row>
												<div class="pink--text text-subtitle-1">{{'$'+product.price}}</div>
											</v-row>
										</v-card-text>
									</v-card>
								</v-col>
              </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
	props: ['session'],
  data: () => ({
		baseUrlImage: "https://v3.tissini.app",
    model: 0,
   
  }),
};
</script>
