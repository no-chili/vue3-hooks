<template>
  <div class="about">
    <h1 v-if="isEmpty">Cart Is Empty</h1>

    <ul>
      <li v-for="(item, index) in cart.items" :key="index">
        <h3>{{ item.naem }}-{{ item.price }}</h3>
        <el-input-number v-model="item.quantity" @change="cartItemChang(item)" :min="0" :step="1" :controls="true">
        </el-input-number>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useCart } from '@/hooks/useCart';
const { cart, isEmpty, cartItemChang } = useCart()
console.log(cart);

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
