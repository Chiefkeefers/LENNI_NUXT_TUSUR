<template>
    <ul class="app-list__list">

        <li class="app-list__listing">
            <SvgIcon class="app-list__img" name="information" width="110" height="110" />
            <div class="app-list__block">
                <p class="app-list__title">Цены</p>
                <p class="app-list__text">Цены, указанные на сайте носят <br> информационный характер.
                    Мы придерживаемся <br> индивидуального подхода в работе с клиентом.</p>
            </div>
        </li>

        <li class="app-list__listing">
            <SvgIcon class="app-list__img" name="contact" width="110" height="110" />
            <div class="app-list__block">
                <p class="app-list__title">Контакты</p>
                <div class="app-list__min-block">
                    <p class="app-list__text">Отдел организации мероприятий </p>
                    <a href="tel:+73822907256" class="app-list__text">
                        8 (3822) 90-72-56</a>
                    <a href="mailto:idat@tusur.ru" class="app-list__text">
                        idat@tusur.ru</a>
                </div>
            </div>

        </li>

        <li class="app-list__listing">
            <SvgIcon class="app-list__img" name="handshake" width="110" height="110" />
            <div class="app-list__block">
                <p class="app-list__title">Преимущество</p>
                <p class="app-list__text">Мы имеем все возможности для того,
                    чтобы<br> помочь как малому бизнесу и молодым талантам, <br> так и большим корпорациям и холдингам.
                </p>
            </div>
        </li>

    </ul>
</template>

<style lang="less">
.app-list {
    width: 100%;
    margin-top: 200px;

    &__list {
        .container();
        display: flex;
        justify-content: space-between;
        margin-top: -132px;

        @media @bw1020 {
            flex-wrap: wrap;
            gap: 50px 80px;
            justify-content: center;
        }

        @media @bw768 {
            flex-direction: column;
        }
    }

    &__listing {
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media @bw1020 {
            flex-direction: column;
            gap: 30px;
        }

        @media @bw370 {
            flex-direction: column;
            gap: 30px;
        }
    }

    &__img {
        display: flex;
        align-self: center;

        @media @bw370 {
            width: 65px;
            height: 65px;
        }
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;

        @media @bw1020 {
            text-align: center;
        }

        @media @bw370 {
            text-align: left;
        }
    }

    &__min-block {
        display: flex;
        flex-direction: column;
        gap: 5px;

        @media @bw370 {
            gap: 1px;
        }
    }

    &__title {
        font-size: 20px;
        font-family: @font1;
        font-weight: 600;
        margin: 0;

        @media @bw1020 {
            font-size: 18px;
        }

        @media @bw370 {
            font-size: 14px;
            text-align: center;
        }
    }

    &__text {
        font-size: 16px;
        font-family: @font1;
        font-weight: 400;
        text-decoration: none;
        margin: 0;

        @media @bw1020 {
            text-align: center;
            width: 280px;
            font-size: 14px;
        }

        @media @bw370 {
            font-size: 14px;

        }
    }

    &__logo {
        position: relative;
        top: 175px;
        left: 377px;
        bottom: 245px;
        z-index: 1;
    }

    &__logo-icon {
        width: 78px;
        height: 57px;
        margin-left: 8px;
        margin-bottom: 5px;
    }

    &__circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: @red;
    }

    &__map {
        width: 100%;
        height: 493px;
        max-width: 752px;
    }
}
</style>