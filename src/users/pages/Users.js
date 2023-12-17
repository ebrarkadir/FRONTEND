import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ebrar Kadir",
      image:
        "https://media.licdn.com/dms/image/C4D03AQG4lbkxZjWqxw/profile-displayphoto-shrink_200_200/0/1637443488669?e=2147483647&v=beta&t=itGUX7PjHGsQXalV_nv9L-z5gwo7-Hd6z8QeTVI2sII",
      places: "3",
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
