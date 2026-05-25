<template>
  <div class="event-page">
    <nav class="events__link">
      <NuxtLink to="/" class="events__nav-link">Главная /</NuxtLink>
      <NuxtLink to="/events" class="events__nav-link">Мероприятия /</NuxtLink>
      <NuxtLink to="/events" class="events__nav-link">{{ data.title }}</NuxtLink>
    </nav>

    <article class="event">
      <header class="event__header">
        <h1 class="event__title title">{{ data.title }}</h1>

        <div class="event__about">
          <div class="event__info-date">
            <hr class="event__line-date">
            <time v-if="datetime" :datetime="data.date" class="event__time">
              {{ datetime.date }}
            </time>
            <div class="event__info-text">{{ data.location }}</div>
            <hr class="event__line-date">
          </div>

          <picture class="event__picture">
            <source type="image/webp" :srcset="data.img_webp" />

            <img :src="data.img" :alt="data.alt" class="event__image" />
          </picture>

          <div class="event__info-time">
            <hr class="event__line-time">
            <span v-if="datetime" class="event__time" data-caption="начало">
              {{ datetime.time }}
            </span>
            <div class="event__info-text">{{ data.address }}</div>
            <hr class="event__line-time">
          </div>
        </div>

      </header>

      <div class="event__container">
        <div class="content event__content" v-html="data.content"></div>

        <EventReserve class="reserve" />

      </div>
    </article>
  </div>
</template>

<script setup>
const slug = computed(() => useRoute().params.event);
const URL = computed(
  () => `http://localhost:3000/json/events/${slug.value}.json`,
);

const { data } = await useFetch(URL);

const datetime = computed(() => {
  try {
    const date = new Date(data.value.date);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.event {
  .container();

  &__header {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 80px;

    @media @bw370 {
      margin-top: 80px;
      margin-bottom: 60px;
    }
  }

  &__about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 942px;
    justify-content: space-between;
    margin: 80px auto;

    @media @bw1340 {
      width: 742px;
    }

    @media @bw1020 {
      width: 546px;
      margin: 64px auto 76px auto;
    }

    @media @bw370 {
      display: grid;
      width: 261px;
      gap: 40px 20px;
      margin: 40px auto;
      grid-template-columns: auto;
      grid-template-areas:
        "picture picture"
        "info-date info-time";
    }
  }

  &__title {
    font-size: 70px;
    font-family: @font5;
    font-weight: 500;
    line-height: 90px;

    @media @bw1340 {
      font-size: 50px;
      line-height: 80px;
    }

    @media @bw1020 {
      font-size: 40px;
      line-height: 80px;
      margin: 0;
    }

    @media @bw370 {
      grid-area: title;
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__info-date {
    display: flex;
    flex-direction: column;
    position: relative;

    @media @bw370 {
      grid-area: info-date;
    }

  }

  &__info-time {
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: left;

    @media @bw370 {
      grid-area: info-time;
    }
  }

  &__time {
    font-family: @font4;
    font-size: 30px;
    text-transform: uppercase;

    @media @bw1340 {
      font-size: 25px;
    }

    @media @bw1020 {
      font-size: 18px;
    }
  }

  &__info-text {
    font-family: @font3;
    font-size: 16px;
    text-transform: uppercase;

    @media @bw1340 {
      font-size: 14px;
    }

    @media @bw1020 {
      font-size: 12px;
    }
  }

  &__line-date {
    width: 160px;
    margin: 12px 0;
    height: 1px;
    background: linear-gradient(270deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 82.86%);

    @media @bw1340 {
      width: 140px;
      margin: 10px 0;
    }

    @media @bw1020 {
      width: 90px;
      margin: 5px 0;
    }
  }

  &__line-time {
    width: 160px;
    margin: 12px 0;
    height: 1px;
    background: linear-gradient(90deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 82.86%);

    @media @bw1340 {
      width: 140px;
      margin: 10px 0;
    }

    @media @bw1020 {
      width: 90px;
      margin: 5px 0;
    }
  }

  &__picture {
    display: block;
    width: 100%;
    max-width: 506px;
    margin: auto;

    @media @bw1660 {
      max-width: 426px;
    }

    @media @bw1340 {
      max-width: 326px;
    }

    @media @bw1020 {
      max-width: 245px;
    }

    @media @bw370 {
      grid-area: picture;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    margin-bottom: 80px;

    h5 {
      font-size: 18px;
      font-family: @font6;
      margin-bottom: 21px;

      @media @bw370 {
        font-size: 16px;
      }
    }

    p {
      font-size: 16px;
      font-family: @font1;
    }

    ul {
      padding-left: 20px;

      li::marker {
        color: @red;
        font-size: 16px;
      }

      @media @bw370 {
        font-size: 14px;
      }
    }

    ol {
      padding-left: 20px;
    }
  }
}
</style>