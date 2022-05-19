<template>
  <div v-if="!isLogined" class="about">
    <h1>This is an Login page</h1>
    <el-form :model="userModel" ref="form">
      <el-form-item label="name">
        <el-input v-model="userModel.userName"></el-input>
      </el-form-item>
      <el-form-item label="pasword">
        <el-input type="password" v-model="userModel.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
  <h3 v-if="isLogined">Welcome {{ user.userName }}</h3>
</template>
<script setup lang="ts">
import { useUser } from '@/hooks/useUser';

const { user, userModel, login, isLogined } = useUser()
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
