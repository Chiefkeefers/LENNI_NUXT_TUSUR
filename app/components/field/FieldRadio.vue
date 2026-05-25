<template>
  <div class="field">
    <fieldset class="field__fieldset">
      <legend v-if="label" class="field__title field-title">{{ label }}</legend>

      <label
        v-for="option in options"
        :key="option.value"
        class="radio field__radio"
      >
        <input
          type="radio"
          class="radio__input"
          :name="name"
          :value="option.value"
          :checked="value === option.value"
          @change="handleChange(option.value)"
        />
        <span class="radio__mark"></span>

        <span class="radio__caption" v-html="option.label"></span>
      </label>
    </fieldset>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
  import { useField } from "vee-validate";

  const props = defineProps({
    initialValue: {
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    submitCount: {
      type: Number,
      default: 0,
    },
  });

  const initialValue = computed(
    () =>
      ((props.initialValue || props.initialValue === 0) &&
        props.options.find((option) => option.value === props.initialValue)
          ?.value) ||
      undefined,
  );

  const { errorMessage, handleChange, value } = useField(
    props.name,
    props.rules,
    {
      initialValue: initialValue.value,
      type: "radio",
    },
  );
</script>
