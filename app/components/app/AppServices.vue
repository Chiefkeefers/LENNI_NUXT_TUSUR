
<template>
<div class="app-services">
<h2 class="app-services__section-title section-title section-title--sub">
 Дополнительные услуги
</h2>
<p class="app-services__section-description">
 Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом. 
Убедившись, что все пожеланию учтены и мы можем приступать к реализациии проекта, начинается сложная, но интересная работа, 
результатом которой будет проведение вашего мероприятия на высшем уровне.
</p>

<AppTable :data="tarifs" class="app-services__table" />
   
</div>
</template>

<script setup>
const tarifs = ref({
    headers: ["Тариф «Light»", "Тариф «Promo»", "Тариф «All stars»" ],
    data: [
        {
         header: "Стоимость за час",
         values: ["1 000 ₽", "3 000 ₽", "от 6 000 ₽"]
        },
        {
         header: "Ведущий мероприятия",
         values: ["", true, true]
        },
        {
         header: "Фотосъемка",
         values: [true, true, true]
        },
        {
         header: "Видеосъемка",
         values: ["", "", true]
        },
        {
         header: "Организация питания",
         values: [true, true, true]
        },
        {
         header: "Декор",
         values: ["", "", true]
        },
        {
         header: "Звуковое сопровождение",
         values: [true, true, true]
        },
        {
         header: "Дополнительное освещение",
         values: ["", "", true]
        },
        {
         header: "Клининг",
         values: [true, true, true]
        },
    ]
});  
 </script>

<style lang="less">
.app-services {
 .container;  
 margin-top: 100px;
 margin-bottom: 50px;

 &__section-description {
  max-width: 870px;
  margin: 0 0 60px;
  font-size: 16px;
  line-height: 22px;  
 }
}
</style>