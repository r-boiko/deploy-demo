import { makeAutoObservable, autorun, when } from "mobx";

class UsersClassStore {
  users = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
      });
  }

  removeUser(id) {
    this.users = this.users.filter((user) => id !== user.id);
  }

  addUser(user) {
    this.users.push({ id: Math.floor(Math.random() * 100), ...user });
  }

  get allUsers() {
    return this.users.length;
  }
}

export const usersClassStore = new UsersClassStore();

autorun(() => {
  console.log("autorun:", usersClassStore);
});

when(
  () => usersClassStore.allUsers > 0,
  () => console.log("when:", usersClassStore.allUsers)
);
