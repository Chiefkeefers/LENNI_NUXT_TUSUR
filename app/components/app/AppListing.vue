<template>
  <section class="app-listing" id="blog">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div :class="ListClass">
      <slot :list="list" />
    </div>

    <button v-if="moreBtn" type="button" class="more-btn app-listing__more-btn">
      Показать всё
      <SvgIcon class="more-btn__arrow-down" name="arrow_down" width="62" height="92" />
    </button>

    <a v-else-if="moreLink" href="#" class="app-upcoming__link link">Смотреть все</a>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
    required: true,
  },
  moreBtn: {
    type: Boolean,
    default: false
  },
  moreLink: {
    type: Boolean,
    default: false
  },
  grid: {
    type: String,
    default: "row",
  },
});

const ListClass = computed(() => props.grid === "column" ? "app-listing__column-list" : "app-listing__list")

const list = ref([]);

const { data } = props.url ? await useAsyncData(`list-${props.url}`, () => {
  return $fetch(props.url);
})
  : { data: null };

if (data?.value) list.value = data.value;
</script>

<style lang="less">
.app-listing {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  .container();

  &__column-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media @bw650 {
      margin-bottom: 30px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 120px 58px;
    margin-bottom: 70px;

    @media @bw1660 {
      gap: 89px 40px;
    }

    @media @bw1170 {
      justify-content: space-between;
    }

    @media @bw1170 {
      gap: 30px;
    }

    @media @bw650 {
      margin-bottom: 50px;
    }

  }

}
</style>