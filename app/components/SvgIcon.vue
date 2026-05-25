<template>
  <component
    v-if="iconPath"
    class="svg-icon"
    :is="iconPath"
    :width="width"
    :height="height"
  />
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      requred: true,
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
  });

  const iconPath = props.name
    ? defineAsyncComponent(() => import(`@/assets/svg-icons/${props.name}.svg`))
    : null;
</script>