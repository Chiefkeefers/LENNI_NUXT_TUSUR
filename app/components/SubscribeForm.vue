<template>
  <form class="subscribe-form" @submit.prevent="onSubmit" novalidate>
    <h4 class="subscribe-form__title">Подпишись и будь в курсе происходящего</h4>

    <div class="subscribe-form__wrapper">
      <div class="subscribe-form__field-wrapper">
        <input class="subscribe-form__input" type="email" placeholder="Email" v-model="email"
          :class="{ 'is-invalid': submitCount && !emailIsValid }" />
        <span v-if="submitCount && emailErrorMessage" class="subscribe-form__error field-error">
          {{ emailErrorMessage }}
        </span>
      </div>

      <button type="submit" class="subscribe-form__submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Отправка...' : 'Подписаться' }}
      </button>
    </div>

    <label class="subscribe-form__check check">
      <input id="agreement-checkbox" class="check__input" type="checkbox" v-model="agreement" />
      <span class="check__mark"></span>
      <span class="check__label check__label--s">
        Согласен на обработку персональных данных
      </span>
    </label>

    <span v-if="submitCount && !agreement" class="subscribe-form__error field-error">
      Это поле обязательно
    </span>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref("");
const agreement = ref(false);
const submitCount = ref(0);
const isSubmitting = ref(false);

const emailIsValid = computed(() => {
  return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email.value);
});

const emailErrorMessage = computed(() => {
  if (!email.value) return "Это поле обязательно";
  if (!emailIsValid.value) return "Email указан неверно";
  return "";
});

const onSubmit = async () => {
  submitCount.value += 1;

  if (!email.value || !emailIsValid.value || !agreement.value) return;

  isSubmitting.value = true;

  try {
    // Имитация API-вызова
    await new Promise(resolve => setTimeout(resolve, 500));

    console.log({
      email: email.value,
      agreement: agreement.value ? 1 : 0
    });

    alert("Подписка оформлена");

    // Очистка формы
    email.value = "";
    agreement.value = false;
    submitCount.value = 0;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="less">
.subscribe-form {
  width: 405px;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media @bw370 {
    margin-left: 0;
    padding: 0;
  }

  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;

    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }

    @media @bw370 {
      font-size: 13px;
      font-family: @font6;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__field-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    @media @bw370 {
      width: 204px;
    }
  }

  &__input {
    box-sizing: border-box;
    padding: 0 25px;
    width: 100%;
    height: 49px;
    border: none;
    background-color: @white;
    font-size: 14px;
    line-height: 19px;
  }

  &__submit {
    width: 135px;
    height: 49px;
    border: none;
    text-align: center;
    background-color: @black;
    color: @white;

    @media @bw370 {
      width: 116px;
    }
  }

  &__error {
    margin: 5px 0 0;
  }
}
</style>