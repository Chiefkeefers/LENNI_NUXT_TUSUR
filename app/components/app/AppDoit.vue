<template>
    <div class="app-doit">
        <p class="app-doit__text">
            <span class="app-doit__quote">Просто делайте,</span>
            <span class="app-doit__quote2"> что нравится,</span>
            <span class="app-doit__quote3">а мы вам поможем</span>
        </p>
    </div>
</template>

<style lang="less">
.app-doit {
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    position: relative;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    margin-top: 2px;

    &__text {
        position: relative;
        margin: 70px 0px 0px -2.5vw;
        font-size: 6.6vw;
        font-family: @font3;
        font-weight: 700;
        line-height: 1.2;

        @media @bw1020 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 0 0 -3vw;
            font-size: 10.5vw;
        }
    }

    &__quote {
        font-weight: 700;
        font-family: @font3;
        white-space: nowrap;
        padding: 0;

        @media @bw1340 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 0 0 -0.5vw;
        }

        @media @bw1020 {
            font-size: 80px;
        }

        @media @bw370 {
            font-size: 40px;
        }
    }

    &__quote2 {
        @media @bw1020 {
            position: relative;
            align-self: flex-end;
            right: -12vw;
        }
    }

    &__quote3 {
        display: block;
        position: relative;
        right: -9.2vw;

        @media @bw1170 {
            position: relative;
            right: 0vw;
        }
    }
}
</style>