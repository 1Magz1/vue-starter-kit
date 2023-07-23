<script setup lang="ts" name="Counter">
import {ref} from "vue";

// data
const count = ref(0);

// methods
const increaseNumber = () => {
  count.value++;
};
const decreaseNumber = () => {
  count.value--;
};
</script>

<template>
  <div class="counter">
    <div class="counter__value">
      {{count}}
    </div>
    <div class="counter__btn">
      <button @click="increaseNumber">+</button>
      <button @click="decreaseNumber">-</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  .counter__value {
    font-size: 20px;
  }
  .counter__btn {
    display: flex;
    gap: 10px;
  }
}
</style>
