import {
  autorun,
  makeAutoObservable,
  when,
  action,
  observable,
  computed,
} from "mobx";

const UsersFuncStore = () =>
  makeAutoObservable(
    {
      users: [],
      fetchUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => {
            this.users = data;
          });
      },
      removeUser(id) {
        this.users = this.users.filter((user) => id !== user.id);
      },
      addUser(user) {
        this.users.push({ id: Math.floor(Math.random() * 100), ...user });
      },
      get allUsers() {
        return this.users.length;
      },
    },
    {
      users: observable,
      fetchUsers: action.bound,
      removeUser: action.bound,
      addUser: action.bound,
      allUsers: computed,
    }
    // { autoBind: true }
  );

export const usersFuncStore = UsersFuncStore();

autorun(() => {
  console.log("autorun:", usersFuncStore);
});

when(
  () => usersFuncStore.allUsers > 0,
  () => console.log("when:", usersFuncStore.allUsers)
);
