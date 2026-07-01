let dataList = JSON.parse(localStorage.getItem("usersData")) || [];

function addUser() {
  let name = prompt("enter your name");
  let id = Number(prompt("enter your id"));
  let balance = Number(prompt("enter your balance"));

  if (name && id && balance) {
    let isIdExists = dataList.some(user => user.userId === id);
    if (isIdExists) {
      alert("ID is Exists");
      return; 
    }

    let newUser = {
      userName: name,
      userId: id,
      userBalance: balance,
    };
    dataList.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(dataList));
    return dataList;
  }
}

// let users =addUser();
// console.log(users);

function withdraw() {
  let newBalance;
  let x = Number(prompt("enter your id"));
  let foundUser = dataList.find((user) => user.userId === x);
  if (foundUser) {
    let y = Number(prompt("Enter the amount you want to withdraw:"));
    if (y > foundUser.userBalance) {
      alert("Not Exist");
    } else {
      foundUser.userBalance = foundUser.userBalance - y;
      newBalance = foundUser.userBalance;
    }
  }
  return newBalance;
}

// let newB1 = withdraw()
// console.log(newB1);

function transfer() {
  let newBalance1;
  let newBalance2;
  let x = Number(prompt("Enter the first Id"));
  let y = Number(prompt("Enter the second Id"));
  let user1 = dataList.find((user) => user.userId === x);
  let user2 = dataList.find((user) => user.userId === y);
  if (user1 && user2) {
    let z = Number(prompt("Enter the amount you want to send:"));
    if (z > user1.userBalance) {
      alert("you can not send this money");
    } else {
      user1.userBalance = user1.userBalance - z;
      newBalance1 = user1.userBalance;
      user2.userBalance = user2.userBalance + z;
      newBalance2 = user2.userBalance;
    }
  }
  return { newBalance1, newBalance2 };
}

// let newB2 = transfer();
// console.log(newB2);

function deleteUser() {
  let x = Number(prompt("Please enter the ID you want to delete"));
  let userID = dataList.findIndex((user) => user.userId === x);
  if (userID !== -1) { 
    dataList.splice(userID, 1);
    localStorage.setItem("usersData", JSON.stringify(dataList));
    return dataList;
  } else {
    alert("User not found!");
  }
}

let newArr = deleteUser();
console.log(newArr);
