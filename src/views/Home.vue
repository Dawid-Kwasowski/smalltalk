<template>

</template>

<script lang="ts" setup>
import { useUsersWebsocketsStore } from "@/store/usersWebsockets"
import { useRouter} from "vue-router"

const router = useRouter()
const store = useUsersWebsocketsStore()

const disconnect = (): void => {
  store.disconnect()
  router.back()
}

 const checkConnection = () => {
  store.checkConnection()
 }

</script>
