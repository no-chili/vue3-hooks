<template>
  <div class="about">
    <h1>This is an Cart page</h1>
    <ul>
      <li v-for="(item, index) in goods" :key="index">
        <h3>{{ item.name }}-{{ item.price }}</h3>
        <el-button type="primary" size="default" @click="addToCart(item)">add to cart</el-button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useCart } from '@/hooks/useCart';
const { addToCart } = useCart()

const goods: Goods[] = [
  {
    id: 136,
    name: 'Good 1',
    price: 67,
  },
  {
    id: 45,
    name: 'Good 1',
    price: 647,
  },
  {
    id: 23,
    name: 'Good 1',
    price: 56,
  }
]
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
