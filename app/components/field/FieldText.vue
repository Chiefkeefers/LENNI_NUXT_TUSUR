<template>
<div class="field">  
<span v-if="label" class="field__title field-title">{{ label }}
</span>    
<label class="field__input-label">
<textarea 
v-model="value"
:placeholder="placeholder"
class="field__textarea" 
>

</textarea>
</label>  

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
    rules: {
      type: Object,
      default: () => ({}),
    },
    placeholder: {
      type: String,
      default: "",
    },
    submitCount: {
      type: Number,
      default: 0,
    },
  });

  const { errorMessage, value } = useField(props.name, props.rules, {
    initialValue: props.initialValue,
  });
</script>