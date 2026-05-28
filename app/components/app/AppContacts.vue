<template>
    <div class="app-contacts" id="contacts">
        <h2 class="app-contacts__section-title section-title">Контакты</h2>
        <div class="app-contacts__contact">

            <ul class="app-contacts__list">

                <li class="app-contacts__listing">
                    <SvgIcon class="app-contacts__img" name="location" width="110" height="110" />
                    <div class="app-contacts__block">

                        <p class="app-contacts__title">Томск, Красноармейская 146</p>

                        <div class="app-contacts__min-block">
                            <p class="app-contacts__text">2 этаж</p>
                            <p class="app-contacts__text">оф. 206</p>
                        </div>

                    </div>

                </li>

                <li class="app-contacts__listing">
                    <SvgIcon class="app-contacts__img" name="home" width="110" height="110" />


                    <div class="app-contacts__block">

                        <p class="app-contacts__title">Отдел аренды</p>
                        <div class="app-contacts__min-block">
                            <a href="tel:+73822907256" class="app-contacts__text">
                                8 (3822) 90-72-56</a>
                            <a href="mailto:idat@tusur.ru" class="app-contacts__text">
                                idat@tusur.ru</a>
                        </div>
                    </div>

                </li>

                <li class="app-contacts__listing">
                    <SvgIcon class="app-contacts__img" name="star" width="110" height="110" />
                    <div class="app-contacts__block">
                        <p class="app-contacts__title">Отдел мероприятий</p>
                        <div class="app-contacts__min-block">
                            <a href="tel:+73822907256" class="app-contacts__text">
                                8 (3822) 90-72-56</a>
                            <a href="mailto:idat@tusur.ru" class="app-contacts__text">
                                idat@tusur.ru</a>
                        </div>
                    </div>
                </li>

            </ul>

            <div class="app-contacts__map-container">
                <TheMap class="app-contacts__map" />
            </div>

        </div>
    </div>
</template>


<style lang="less">
.app-contacts {
    width: 100%;
    margin-top: 200px;
    margin-bottom: 150px;

    @media @bw1020 {
        margin-top: 58px;
    }

    &__contact {
        .container();
        display: flex;

        @media @bw1020 {
            display: flex;
            flex-direction: column-reverse;
        }

    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 67px;
        padding: 0;

        @media @bw1020 {
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding: 0;
        }

        @media @bw768 {
            display: flex;
            flex-direction: row;
            gap: 40px;
            padding: 0;
        }

        @media @bw500 {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 0;
        }

        @media @bw320 {
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding: 0;
        }
    }

    &__listing {
        display: inline-flex;
        align-items: center;

        @media @bw1020 {
            display: inline-flex;
            align-items: center;
        }

        @media @bw768 {
            display: grid;
            align-items: center;
            justify-items: center;
        }

        @media @bw500 {
            display: inline-flex;
            align-items: center;
        }

        @media @bw320 {
            display: inline-flex;
            align-items: center;
        }
    }

    &__img {
        margin-right: 54px;

        @media @bw1340 {
            margin-right: 25px;
        }

        @media @bw1170 {
            margin-right: 54px;
        }

        @media @bw1020 {
            margin: 0 0 30px 0;
        }

        @media @bw768 {
            width: 65px;
            height: 65px;
            margin-right: 10px;
            margin-bottom: 0;
        }
    }

    &__block {
        @media @bw1020 {
            text-align: center;
            width: 100%;
        }

        @media @bw320 {
            text-align: left;
            width: 210px;
        }
    }

    &__min-block {
        display: flex;
        flex-direction: column;
        gap: 5px;

        @media @bw1020 {
            align-items: start;
        }

        @media @bw768 {
            align-items: center;
        }

        @media @bw500 {
            align-items: start;
        }

        @media @bw320 {
            align-items: start;
            gap: 1px;
        }
    }

    &__title {
        font-size: 20px;
        font-family: @font1;
        font-weight: 600;
        width: 100%;
        margin: 0;
        margin-top: -4px;

        @media @bw1170 {
            font-size: 18px;
            text-align: start;
        }

        @media @bw320 {
            font-size: 14px;
            text-align: start;
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
        }

        @media @bw320 {
            font-size: 14px;
            text-align: left;
        }
    }

    &__map-container {
        width: 750px;
        height: 490px;
        margin-left: auto;

        @media @bw1340 {
            width: 508px;
            height: 463px;
        }

        @media @bw1020 {
            width: 708px;
            height: 463px;
            margin-bottom: 100px;

            @media @bw768 {
                width: 280px;
                height: 186px;
            }
        }
    }

    &__section-title {
        margin-top: -17px;
    }
}
</style>