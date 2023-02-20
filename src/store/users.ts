import { defineStore } from 'pinia'
interface User {
  status: string
  name: string
}
export const useUsersStore = defineStore('users', {
  //state
  state: () => ({
    userInfo: {
      status: 'active',
      name: '',
    } as User,
    users: {
      online: [] as User[],
      blacklisted: [] as User[],
      favorites: [] as User[],
    }
  }),

  //actions
  actions: {
    saveUser(username: string, user?: User): void {
      if(user) {
        this.userInfo = Object.assign(this.userInfo, user)
      } else {
        this.userInfo.name = username
      }
    }
  }
  //getters
})
