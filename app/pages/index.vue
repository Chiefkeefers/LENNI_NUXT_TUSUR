<template>
  <div class="home">

    <AppHero class="home__hero" />
    <AppOffers class="home__offers" />
    <AppAbout class="home__about" />
    <AppUpcoming class="home__upcoming"/>
    
   
    <AppListing v-slot="{ list }" 
    title="Блог" 
    :moreLink="true"
    :grid="'column'"
    :url="'http://localhost:3000/json/blog.json'"
    class="home__listing"
    >
      <ArticleCard
        v-for="card in list"
        :key="card.slug"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppContacts class="home__contacts"/>
    <AppDoit class="home__doit"/>
  
    </div>
</template>


<script setup>

const list = ref([]);
const URL = "http://localhost:3000/json/events.json";

const { data } = await useAsyncData(`events`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;

</script>

<style lang="less">
.home {
width: 100%;
margin-top: 100px;
margin-bottom: 70px;
 @media @bw1370 {
margin-bottom: 100px;
 }
  @media @bw768 {
margin-bottom: 40px;
margin-top: 80px;
 }
}
</style>