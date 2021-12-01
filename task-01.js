import users from "./users.js";

const getUserNames = users =>  users.map(user => user.name) ;
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


  const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)
      
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

  const getUsersWithGender = (users, gender) =>  users.filter(user => user.gender === gender);
    
  
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]