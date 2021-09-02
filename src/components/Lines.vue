<template>
  <v-container>
    <v-card v-for="(line, i) in lines" :key="i"  class="d-flex justify-center mb-6" flat tile>
      <v-card class="pa-2 elevation-0" tile>
				<v-img :src="baseURlImage+line.image.slice(16, line.image.length)"></v-img> 
			</v-card>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
		baseURlImage: "https://v3.tissini.app/img/categories/multivendor/",
  }),
	props: ['lines']
};
</script>
