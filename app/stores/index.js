export const useStore = defineStore("index", () => {
  const navActive = ref(false);

  const modal = reactive({});

  const getModal = computed(() => Object.values(modal).find((item) => item));

  const closeModal = (name) => {
    modal[name] = false;
  };

  const openModal = (name) => {
    modal[name] = true;
  };

  return {
    navActive,
    modal,
    getModal,
    closeModal,
    openModal,
  };
});
