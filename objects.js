
// Activity:

// In the below exercises, write code that achieves
// the desired result. To check your work, run this
// file in your Terminal.

var foods = {
  apples: 23, 
  grapes: 507, 
  eggs: 48
}

// Write code that prints all of the 'keys' of the foods variable 
// you created above:
// YOUR CODE HERE
Object.keys(foods)
// Write code that prints all of the 'values' of the foods variable 
// you created above:
// YOUR CODE HERE
Object.values(foods)
// Write code that prints the value of the second food of the foods variable 
// you created above:
// YOUR CODE HERE
foods.grapes;
// Write code that adds a food to the foods object. 
// Then, print the updated object:
// YOUR CODE HERE
foods.bannanas = 506
Objects.keys(foods)

#-------------------
// Part 2: Email
#-------------------


// Think about all the pieces of information associated with one single email in your inbox.
// It has a sender, a subject, ...

// Declare a variable that stores an object. Each key should be an attribute of an email and each
// value should be some appropriate value for that key. Work to have at least 5 key-value pairs.

// Write code that logs your email object to the terminal.
var eMail = {
  sender: "Nike@hotmail.com",
  subject: "Biggest Sale of the Summer",
  to: "jjmacfarlane943@gmail.com",
  replyTo: "N/A",
  body: "Be sure to stop by nike.com to partake in the biggest sale of the summer"
}

// Write code that logs all of the 'keys' of the email object 
// you created above:
// YOUR CODE HERE
Object.keys(eMail)
// Write code that logs all of the 'values' of the email object 
// you created above:
// YOUR CODE HERE
Object.values(eMail)

#-------------------
// Part 3: Many Emails - CHALLENGE!
#-------------------

// LONG EXAMPLE:
// Now that we've learned about Objects AND Arrays, we can combine them.

// Check out the following example of an array of Instagram posts:


posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];


// An Array of Objects is probably more realistic. Objects are a data type that's great
// for storing more complex data. Below, we can store multiple key-value pairs
// that relate to each individual Instagram post:


posts = [
  {
    imageSrc: "./images/beach.png",
    caption: "At the beach with my besties",
    timestamp: "4:37 PM August 13, 2019",
    number_likes: 0,
    comments: []
  }, 
  {
    imageSrc: "./images/holiday-party.png",
    caption: "What a great holiday party omg",
    timestamp: "11:37 PM December 31, 2019",
    number_likes: 13,
    comments: []
  }
];

console.log(posts);
console.log(posts[0]);


// The code snippet above shows an Array with 2 elements. Each element in the Array is a 
// Objects. Each of those Objects has 4 key-value pairs. This may LOOK 
// a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
// good to have some exposure before going into Mod 1.


// YOU DO: Create an array of at least 3 EMAIL Objects, using the same 
// key-value pairs you used in your email Object above.
// Then, print the email Array to the Terminal.
var eMail = [
  {
  sender: "Nike@hotmail.com",
  subject: "Biggest Sale of the Summer",
  to: "jjmacfarlane943@gmail.com",
  replyTo: "N/A",
  body: "Be sure to stop by nike.com to partake in the biggest sale of the summer"
},
{
sender: "Adidas@gmail.com",
subject: "Second biggest sale of the summer",
to: "jjmacfarlane943@gmail.com",
replyTo: "Adidasquickreply@hotmail.com",
body: "Make sure to swing by the nearest adidas store to check out the second biggest sale of the summer"  
},
{
sender: "Deftones1342@outlook.com",
subject: "New Album 2023",
to: "jjamcfarlane943@gmail.com",
replyTo: "Chino@Deftones.org",
body: "We are releasing out final album on Oct 32 of 2023" 
}
]