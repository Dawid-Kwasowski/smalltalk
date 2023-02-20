<template>
  <div class="auth-view">
      <v-card class="auth-view__card elevation-12">
        <v-card-title>Login</v-card-title>
        <v-divider></v-divider>
        <v-card-item>
          <v-form fast-fail @submit.prevent="connect()">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              class="my-2"
              variant="underlined"
              label="Your username"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-card-item>
      </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { Ref, ref } from "vue"
  import { useUsersWebsocketsStore } from "@/store/usersWebsockets"
  const username: Ref<string> = ref('')
  const store = useUsersWebsocketsStore()
  const connect = (): void => {
    store.connect(username.value)
  }

  const nameRules = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters'
  ]

</script>

<style lang="scss" scoped>
  .auth-view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    &__card {
      min-width: 320px;
      padding: 5px;
    }
  }
</style>
