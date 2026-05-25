export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("keyup", {
        mounted(el, binding) {
        if(import.meta.client) {
         el._keyupHandler = (evt) => binding.value(evt, el);
         document.addEventListener("keyup", el._keyupHandler)
        }
        },
        beforeUnmount(el) {
        if(import.meta.client && el._keyupHandler ) {
         document.removeEventListener("keyup", el._keyupHandler)
         delete el._keyupHandler;
        }
        }
    })
});