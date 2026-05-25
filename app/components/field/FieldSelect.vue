<template>
  <div class="field">
    <span v-if="label" class="field__title field-title"> {{ label }} </span>

    <VueMultiselect
      v-model="selected"
      :options="options"
      label="label"
      track-by="value"
      :placeholder="placeholder"
      :searchable="searchable"
      :allowEmpty="allowEmpty"
      selectLabel=""
      selectedLabel=""
      :deselectLabel="allowEmpty ? '⮾' : ''"
      class="field__select"
      @update:modelValue="onSelect"
    />

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
  import VueMultiselect from "vue-multiselect";
  import "vue-multiselect/dist/vue-multiselect.css";

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
    placeholder: {
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
    searchable: {
      type: Boolean,
      default: false,
    },
    allowEmpty: {
      type: Boolean,
      default: false,
    },
  });

  const selected = ref(
    ((props.initialValue || props.initialValue === 0) &&
      props.options.find((option) => option.value === props.initialValue)) ||
      undefined,
  );

  const { errorMessage, handleChange } = useField(props.name, props.rules, {
    initialValue: selected.value?.value,
  });

  const onSelect = (option) => {
    handleChange(option.value);
  };
</script>
