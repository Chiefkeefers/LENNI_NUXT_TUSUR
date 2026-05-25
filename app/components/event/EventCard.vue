<template>
  <article class="event-card">
    <NuxtLink :to="`/events/${data.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img :src="data.img" :alt="data.alt" class="event-card__img" />
      </picture>

      <h2 class="event-card__title">{{ data.title }}</h2>

      <p class="event-card__description">{{ data.description }}</p>

      <time v-if="date" :datetime="data.date" class="event-card__time">
        {{ date }}
      </time>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const date = computed(() => {
  try {
    const date = new Date(props.data.date);
    return `${date.toLocaleDateString()} | начало ${date.toLocaleTimeString(
      "ru-RU",
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    )}`;
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.event-card {
  display: flex;
  width: 406px;
  min-width: 280px;

  @media @bw1660 {
    width: 393px;
  }

  @media @bw1170 {
    width: 290px;
  }

  @media @bw1020 {
    width: 339px;
  }

  @media @bw768 {
    width: 280px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: @black;
    text-decoration: none;

    .event-card__title {
      margin: 0;
    }

    &:hover {
      .event-card__title {
        color: @red;
        text-decoration-color: @red;
      }
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    margin: 0 0 25px;
    font-size: 0;
    text-decoration: none;
  }

  &__img {
    width: 100%;
  }
}
</style>