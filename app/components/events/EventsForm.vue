<template>
  <form class="events-form" @submit.prevent="onSubmit" novalidate>
    <div class="events-form__list">
      <div class="events-form__group events-form__group--w50">
        <FieldRadio name="format" :options="[
          { label: 'Мастер-класс/семинар', value: 'seminar' },
          { label: 'Концерт/выступление', value: 'concert' },
          { label: 'Выставка/показ', value: 'show' },
          { label: 'Другое', value: 'other' },
        ]" :rules="{ required: true }" :submitCount="submitCount" label="Формат мероприятия:"
          class="events-form__field" />
      </div>

      <div class="events-form__group events-form__group--w50">
        <FieldSelect name="amount" :options="[
          { label: 'до 20 человек', value: '20' },
          { label: 'от 20 до 100 человек', value: '100' },
          { label: 'от 100 до 500 человек', value: '500' },
          { label: 'более 500 человек', value: '1000' },
        ]" :rules="{ required: true }" :searchable="false" :submitCount="submitCount"
          label="Планируемое количество посетителей:" placeholder="Выберите количество" class="events-form__field" />

        <FieldDate name="date" label="Дата проведения:" :rules="{ required: true }" :submitCount="submitCount" />
      </div>
    </div>

    <div class="events-form__section">
      <h3 class="events-form__section-title field-title">
        Контактные данные:
      </h3>

      <div class="events-form__list">
        <FieldInput name="first_name" label="Имя" placeholder="Имя" :rules="{ required: true }"
          :submitCount="submitCount" class="events-form__field events-form__field--w50" />

        <FieldInput name="last_name" label="Фамилия" placeholder="Фамилия" :rules="{ required: true }"
          :submitCount="submitCount" class="events-form__field events-form__field--w50" />

        <FieldInput name="phone" label="Телефон" placeholder="+7 (###) ###-##-##" :rules="{ required: true }"
          mask="+7 (###) ###-##-##" :submitCount="submitCount" class="events-form__field events-form__field--w50" />

        <FieldInput name="email" label="Email" type="email" placeholder="Email" :rules="{ required: true }"
          :submitCount="submitCount" class="events-form__field events-form__field--w50" />
      </div>
    </div>

    <FieldText name="text" label="Есть пожелания? Напишите нам:" :submitCount="submitCount"
      class="events-form__field" />

    <FieldCheck name="agreement" :rules="{ required: true }" :submitCount="submitCount" class="events-form__field">
      <template #label>
        Я соглашаюсь с <a href="#" target="_blank">пользовательским соглашением</a>
        и с <a href="#" target="_blank">политикой</a> использования персональных данных
      </template>
    </FieldCheck>

    <div v-if="errorMessage" class="events-form__error form-error">
      {{ errorMessage }}
    </div>

    <div class="events-form__btns">
      <button type="submit" class="btn events-form__submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
      </button>

      <button type="button" class="events-form__close-btn" @click="close">
        Закрыть
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';

const emits = defineEmits(["close"]);

const isSubmitting = ref(false);
const errorMessage = ref('');

const { submitCount, handleSubmit } = useForm();

const close = () => {
  emits("close");
};

const onSubmit = handleSubmit(async (submitValues) => {
  isSubmitting.value = true;
  errorMessage.value = '';

  try {
    console.log(submitValues);
    alert("Отправлено");
    close();
  } catch (error) {
    errorMessage.value = 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.';
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<style lang="less">
.events-form {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media @bw768 {
      flex-direction: column;
    }
  }

  &__field,
  &__group {
    width: 100%;

    &--w50 {
      width: calc(50% - 30px);
    }

    @media @bw768 {
      &--w50 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    margin-top: 10px;

    @media @bw768 {
      flex-direction: column;
      gap: 30px;
      margin-bottom: 30px;
    }
  }

  &__submit {
    display: inline-block;
    box-sizing: border-box;
    padding: 15px 159px;
    border: 1px solid @black;
    background-color: transparent;
    outline: none;
    color: @black;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    cursor: pointer;

    @media @bw1660 {
      padding: 15px 156px;
    }

    @media @bw1020 {
      padding: 15px 100px;
    }

    @media @bw768 {
      padding: 15px 80px;
      width: 240px;
    }

    &:hover {
      background-color: @black;
      color: @white;
    }
  }

  &__close-btn {
    margin: 0 auto;
    padding: 4px 0;
    border: none;
    background: transparent;
    color: @black;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: @red;
    }
  }
}
</style>