import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { useUsersStore } from "@/store/users";
import { useRouter } from "vue-router";

export const useUsersWebsocketsStore = defineStore('users-websockets', () => {
  const users = io('ws://localhost/users', {
    autoConnect: false,
  })
  const store = useUsersStore()
  const router = useRouter()
  const connect = (username: string): void => {
    users.connect()
    users.emit('users/login', { login: username }, (response: any) => {
      if (response.login) {
        router.push({path: 'home'})
        store.saveUser(response.login)
      }
    })
  }

  const disconnect = () => {
    users.disconnect()
  }

  const checkConnection = (): void => {
    console.log('Checking connection', users)
  }

  return { connect, disconnect, checkConnection }
})
