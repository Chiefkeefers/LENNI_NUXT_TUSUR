<template>
  <ClientOnly>
    <teleport to="body">
      <Transition> 
      <div 
       v-if="isActive || alive" 
       v-keyup="onEsc" 
       v-show="isActive" 
       class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button 
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot>
           
            </slot>
          </div>
        </div>
      </div>
    </Transition> 
    </teleport>
  </ClientOnly>
</template>

<script setup>
    const props = defineProps({
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    alive: {
        type: Boolean,
        default: false
    }
    });

    const store = useStore();
    const isActive = computed(() => {
    return props.name ? store.modal[props.name] : null;
    });

    const close = () => {
    if (props.name) store.closeModal(props.name);
    };
    const onEsc = (event) => {
     if (event.key === "Escape" || event.keyCode === 27)   close(); 
    }
</script>

<style lang="less">
  .modal-window {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 90px 95px 50px;
    display: flex;
    z-index: 110;
    overflow: auto;
    background-color: rgba(28, 27, 27, 0.4);
    backdrop-filter: blur(50px);
    @media @bw1660 {
    padding: 100px 65px 60px;
    }
    @media @bw768 {
    padding: 100px 0 60px;  
    }

    &__wrapper {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1210px;
        margin: auto;
        background-color: @gray;
        background-image: url(../assets/images/noise.png);
        background-position: 0 0;
        background-size: auto;
        background-repeat: repeat;
        @media @bw1660 {
        max-width: 1144px;
       }
        @media @bw1170 {
        max-width: 900px;
        margin-top: 50px;
       }
        @media @bw1020 {
        max-width: 688px;
       }
       @media @bw768 {
        max-width: 280px;
        margin-top: 50px;
       }
       }
    
      &__sticky-close {
        top: 0;
        align-self: flex-end;
        width: 0;
        height: 0;
      }

      &__x-btn {
        position: absolute;
        top: -30px;
        right: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: @black;
        transition: background-color 0.2s;
         @media @bw768 {
        width: 36px;
        height: 36px;
        top: -18px;
        right: -18px;
       }
         &:hover,
         &:active {
         background-color: @red;
    }
      }
      &__icon {
      color: @white;
      pointer-events: none;
      
      }

      &__container {
        box-sizing: border-box;
        width: 100%;
        max-width: 950px;
        margin: 0 auto;
        padding: 0 40px 40px;
         @media @bw768 {
         max-width: 240px;
         padding: 0;
       }
  
      }

      &__title {
       box-sizing: border-box;
       display: flex;
       align-items: center;
       margin: -40px 0 70px -85px;
       padding: 10px 85px;
       width: 595px;
       min-height: 80px;
       background-color: @black;
       text-transform: uppercase;
       font-weight: 400;
       font-family: @font7;
       font-size: 22px;
       line-height: 1.36;
       color: @white;
       letter-spacing: 0.02em;
       z-index: 1;
       @media @bw1170 {
        max-width: 700px;
        margin: -30px 0 50px -10px;
       }
       @media @bw1020 {
        max-width: 450px;
        font-size: 22px;
        margin: -30px 0 50px -13px;
        padding: 10px 60px 10px 13px;
       }
       @media @bw768 {
       font-size: 14px;
       width: 225px;
       min-height: 77px;
       padding: 10px 20px;
       margin: -35px 0 50px -5px;
       }
      }
  }
</style>