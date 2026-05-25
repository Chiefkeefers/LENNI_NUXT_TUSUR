<template>
 <section class="event-reserve" @submit="onSubmit">
    <form class="event-reserve__form">
        <div class="event-reserve__checks">
        <h4 class="event-reserve__title">
         Забронировать столик
         </h4>
        <FieldCheck 
        v-for="(val, key) in checks" 
        :key="key"
        :checkedValue="+key"
        name="table"
        :label="`${key} стол`"
        :red="val.red || false"
        :disabled="val.disabled || false"
        class="event-reserve__check" />
        </div>

      <EventScene 
      :checks="checks" 
      :values="values" 
      class="event-reserve__scene" 
      @tableClick="onTableClick"
      />

        <div class="event-reserve__order">
         <h4 class="event-reserve__title">Ваши пригласительные билеты</h4>
         <div class="event-reserve__tickets-list">
        <div class="event-reserve__tickets">
        <div class="event-reserve__qty" data-caption="шт." :data-price="price.red">{{ red }}</div>
        <div class="event-reserve__sum" data-currency="₽">{{ redCost }} </div>
        </div>
        <div class="event-reserve__tickets">
        <div class="event-reserve__qty" data-caption="шт." :data-price="price.black">{{ black }}</div>
        <div class="event-reserve__sum" data-currency="₽">{{ blackCost }}</div>
      </div>
    </div>

    <div class="event-reserve__total" 
    data-caption="Сумма" 
    data-currency="₽">{{ redCost + blackCost }}</div>
    <button type="submit" class="btn btn--red event-reserve__submit">
      Купить билеты
    </button>
       </div>

      <div class="event-reserve__legend">
       <h4 class="event-reserve__title--right">Стоимость пригласительного билета</h4>
         <div class="event-reserve__ticket-list"
         data-caption="₽ | 1 персона"
         >
        <div class="event-reserve__ticket">
         <div class="event-reserve__square-red"></div> 
        <div class="event-reserve__qty" data-caption="₽ | 1 персона">{{ price.red }}</div>
        </div>
        <div class="event-reserve__ticket">
         <div class="event-reserve__square-black"></div> 
        <div 
        class="event-reserve__qty" 
        data-caption="₽ | 1 персона">{{price.black}}</div>
        </div>
    </div>

    <h4 class="event-reserve__title--right">Примечание</h4>
     <div class="event-reserve__ticket2">
     
         <div class="event-reserve__ellipse-black"></div> 
         <div class="event-reserve__ellipse-red"></div> 
        <div class="event-reserve__not">доступные места</div>
        </div>
      <div class="event-reserve__ticket2">
         <div class="event-reserve__ellipse-gray"></div> 
        <div class="event-reserve__not">забронировано</div>
        </div>
      </div>         

   </form>
  </section>

</template>

<script setup>
import { useForm } from 'vee-validate';

const checks = ref({
  1: { red: true },
  2: {},
  3: {},
  4: { red: true },
  5: { disabled: true },
  6: {},
  7: { red: true },
  8: { red: true },
  9: { red: true },
 10: {},
 11: {},
});

const price = ref({"red": 1400, "black": 1250 });

const {submitCount, handleSubmit, setFieldValue, values} = useForm({
  initialValues: {
    table: []
  }
})

const black = computed(() => {
  return Array.isArray(values.table) ? values.table.reduce(function(sum, current){
   return sum + (checks.value[current]?.red ? 0 : 1)
  }, 0) : 0;
})

const blackCost = computed(() => black.value * price.value.black);

const red = computed(() => {
  return Array.isArray(values.table) ? values.table.reduce(function(sum, current){
   return sum + (checks.value[current]?.red ? 1 : 0)
  }, 0) : 0;
})

const redCost = computed(() => red.value * price.value.red);

const onSubmit = handleSubmit((submitValues) => {
console.log( submitValues)
})
const onTableClick = (table) => {
  if (checks.value[table]?.disabled) return;

  const currentArray = Array.isArray(values.table) ? values.table : [];

  let newArray;
  if (currentArray.includes(table)) {
   newArray = currentArray.filter((check) => check !== table)
  } else {
   newArray = [...currentArray, table]
  }
  setFieldValue("table", newArray);
}
</script>

<style lang="less">
.event-reserve {
    margin-bottom: 150px;
    &__form {
     display: grid;
     width: 100%;
     gap: 65px 11%;
     grid-template-columns: 405px 1fr;
    /* grid-template-columns: px calc(89% - 405px); */
     grid-template-areas: 
    "checks scene"
    "order legend"; 
     width: 100%;
     @media @bw1660 {
     gap: 65px 6% 
     }
     @media @bw1340 {
      grid-template-columns: 340px 1fr;
     }

      @media @bw1020 {
      grid-template-columns: 1fr 388px;
      gap: 60px;
      grid-template-areas: 
      "scene scene"
      "checks legend"
      "checks order";
     }
     @media @bw768 {
      grid-template-columns: 100%;
      grid-template-areas: 
      "scene"
      "legend"
      "checks"
      "order";
     }
    }
    &__checks {
    grid-area: checks;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }

    &__title {
      font-family: @font6;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: left; 
      margin-top: 0;
      margin-bottom: 31px;  
      &--right {
       font-family: @font6;
       text-align: right;  
       font-size: 18px;
       margin: 0;
       margin-bottom: 31px; 
       @media @bw1020 {
       font-size: 16px;  
      }
      @media @bw370 {
      text-align: left;
      }
      }
      @media @bw1020 {
      font-size: 16px;  
      }
    }
    &__check-group {
      display: flex;
      cursor: pointer;
      flex-direction: column;
    }
    
    &__check {
     margin-bottom: 10px;
    }

  &__order {
  grid-area: order; 
  width: 405px;
  @media @bw1170 {
  width: 305px;  
  }
  @media @bw1020 {
  width: 100%;
  margin: 0;
  }
  }
  &__tickets {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
  margin-bottom: 16px;
  font-family: @font6;
  font-weight: 400;
  font-size: 16px;
   line-height: 22px; 
   }
     &__tickets-list {
     margin-bottom: 20px;
     }
     &__total {
     display: flex;
     justify-content: center;
     align-items: center;
     font-family: @font1;
     font-weight: 600;
     font-size: 20px;
     line-height: 27px;
     margin-top: 10px;
     margin-bottom: 53px;
     @media @bw1170 {
     margin-bottom: 33px;   
     }
     }
      &__submit {
      display: block;
      background-color: @red;
      height: 52px;
      border: none;
      font-size: 16px;
      color: @white;
      justify-content: center;
      align-items: center;
      width: 100%;
      &:hover {
       background-color: @red_dark;
      }
     }
     &__qty {
     &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
    }
  
  &__sum {
    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
     
  }

  &__total {
    &::before {
      content: attr(data-caption);
      margin-right: 30px;
    }

    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  }
     &__legend {
      grid-area:legend;
      width: 100%;
      @media @bw1170 {
       width: 480px;
      }
      @media @bw1020 {
      width: 100%;
      margin: 0;
      }
     }

     &__ticket {
     display: flex;
     justify-content: flex-end;
     gap: 9px;
     align-items: center;
     font-family: @font6;
     font-weight: 400;
     font-size: 16px;
     line-height: 22px;
     margin-bottom: 15px;
     @media @bw370 {
     justify-content: flex-start;
     }
     }
     &__ticket-list {
       margin-bottom: 22px;
     }
    &__square-red {
      width: 24px;
      height: 24px;
      background-color: @red;
    }
    &__square-black {
      width: 24px;
      height: 24px;
      background-color: @black; 
    }

    &__ticket2 {
      display: flex;
     justify-content: flex-end;
     gap: 9px;
     align-items: center;
     font-family: @font6;
     font-weight: 400;
     font-size: 16px;
     line-height: 22px;
     margin-bottom: 15px;
     @media @bw370 {
     justify-content: flex-start;
     }
     }
  
    &__not {
      font-family: @font6;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      margin-top: 3px;
      margin-bottom: 0;
    }  
    &__ellipse-red {
      width: 24px;
      height: 24px;
      border: 1px solid @red;
      border-radius: 50%;
      margin-right: 21px;
    }
    &__ellipse-black {
      width: 24px;
      height: 24px;
      border: 1px solid @black;
      border-radius: 50%;
      margin-right: -22px;
    }
    &__ellipse-gray {
      width: 24px;
      height: 24px;
      background-color: rgba(191, 191, 191, 1);
      border-radius: 50%;
      margin-right: 29px;  
}

}
</style>