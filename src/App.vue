<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { MyQuery } from './apollo/queries/my-query'

const { result, loading, error } = useQuery(MyQuery)

const users = computed(() => result.value?._helloworld_article ?? [])

</script>

<template>
  <div v-if="loading">Loading...</div>

  <p v-else-if="result">
    {{ users }}
  </p>

  <div v-else-if="error">Error: {{ error.message }}</div>
</template>
