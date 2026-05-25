<template>
    <article class="article-card">
        <a href="" class="article-card__link">
            <picture class="article-card__picture">
                <source type="image/webp" media="(max-width: 450px)" :srcset="data.img_webp" />
                <source media="(max-width: 450px)" :srcset="data.img" />
                <source type="image/webp" media="(max-width: 1169px)" :srcset="data.img_tablet_webp" />
                <source media="(max-width: 1169px)" :srcset="data.img_tablet" />
                <source type="image/webp" :srcset="data.img_webp" />
                <img :src="data.img" :alt="data.alt" class="article-card__img" />
            </picture>
        </a>
        <div class="article-card__info">
            <time :datetime="data.date" class="article-card__time">
                {{ date }}
            </time>
            <a href="" class="article-card__title-link">
                <h4 class="article-card__title">
                    {{ data.title }}
                </h4>

                <div class="article-card__arrow arrow">
                    <SvgIcon class="article-card__arrow-icon" name="arrow" width="92" height="62" />
                </div>
            </a>

            <p class="article-card__description">
                {{ data.descr }}
            </p>
        </div>
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

        return new Date(props.data.date).toLocaleDateString();

    } catch {
        return null;
    }
});
</script>

<style lang="less">
.article-card {
    display: flex;
    position: relative;
    width: 1337px;
    margin: -4px auto;

    @media @bw1660 {
        padding-left: 0;
        padding-right: 0;
        width: 100%;
    }

    @media @bw1170 {
        flex-direction: column;
    }

    &:active {
        .article-card__picture {
            box-shadow: 0 0 30px fade(@black, 55%);
        }
    }

    &:hover {
        @media (hover: hover) {
            .article-card__picture {
                box-shadow: 0 0 30px fade(@black, 55%);
            }
        }
    }

    &+.article-card {
        margin-top: 120px;

        &::before {
            content: '';
            display: block;
            position: absolute;
            margin: 0 auto 60px;
            bottom: 100%;
            left: 0;
            right: 0;
            max-width: 1255px;
            width: 100%;
            height: 1px;
            background-color: @black;
            pointer-events: none;
        }
    }

    // gap: 60px;
    &__link {
        flex-shrink: 0;
        align-self: flex-start;
        margin-right: 60px;
        display: block;
        width: 467px;
        text-decoration: none;
        font-size: 0;

        @media @bw1660 {
            margin-right: 40px;
        }

        @media @bw1340 {
            margin-right: 30px;
        }

        @media @bw1020 {
            width: 100%;
        }

        &:hover {
            &~.article-card__info {
                .article-card__title-link {
                    color: @red;
                    text-decoration-color: @red;
                }
            }
        }
    }

    &__picture {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        transition: box-shadow 0.2s;

        &::after {
            content: '';
            display: block;
            width: 100%;
            padding-top: 62.715%;
        }
    }

    &__img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media @bw370 {
            max-width: 280px;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;

        @media @bw370 {
            padding-top: 10px;
            padding: 0;
        }
    }

    &__time {
        margin: 0 0 40px;
        color: @black;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;

        @media @bw370 {
            font-size: 14px;
            margin: 0 0 20px;
        }
    }

    &__title-link,
    &__description {
        max-width: 470px;
    }

    &__title-link {
        margin: auto 0 40px;
        color: @black;
        text-decoration-color: transparent;
        transition: color 0.2s, text-decoration-color 0.2s;

        &:hover {
            color: @red;
            text-decoration-color: @red;
        }
    }

    &__title {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;

        @media @bw370 {
            font-size: 16px;
            font-family: @font5;
        }
    }

    &__description {
        margin: 0;
        font-size: 16px;
        line-height: 22px;

        @media @bw370 {
            font-size: 14px;
        }
    }

    &__arrow {
        position: absolute;
        right: 0;
        bottom: 30px;
        transform: rotate(180deg);
        transition: none;

        @media @bw370 {
            bottom: -80px;
        }

    }

    &__arrow-icon {
        @media @bw1170 {
            width: 67px;
            height: 40px;
        }
    }
}
</style>
