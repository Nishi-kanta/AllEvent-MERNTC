import React from "react";

const ObjectsArray = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      skill: ["m", "e", "r", "n"],
    },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  ];

  // Updating users whose age is greater than 28
  const updatedUsers = users.map((user) =>
    //Add older KEY by checking age with type 1 and type 2 TRICK

    // type1:- avoid  older property adding in each object
    //type2:-  need to add older property in each object so use return

    //TYPE-1
    // user.age > 28
    //   ? { ...user, age: user.age + 5, older: "older" }
    //   : user.age > 25 && user.age <= 28
    //   ? { ...user, older: "younger" }
    //   : user

    //TYPE-2
    // {
    //   return {
    //     ...user,
    //     age: user.age > 28 ? user.age + 5 : user.age,
    //     older: user.age > 28 ? "older" : "",
    //   };
    // }

    // Add status by checking age and skills in both type 1 and 2

    //TYPE-1  (Avoid property [key])
    // user.age < 30 && user.skill?.length > 0
    //   ? { ...user, statuss: "shortlisted" }
    //   : user

    //Type-2 (need property [key])
    {
      return {
        ...user,
        statuss: user.age < 30 && user.skill?.length > 0 ? "sgortlisted" : "",
      };
    }
  );

  console.log(updatedUsers);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {updatedUsers.map((user) => {
          return user?.skill?.length > 0 ? (
            <li key={user.id}>
              {user.name} - {user.age} years old - {user.email}
              having skills- {user.skill?.join(",")}
            </li>
          ) : (
            <li key={user.id}>
              {user.name} - {user.age} years old - {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ObjectsArray;