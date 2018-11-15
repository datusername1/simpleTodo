//this function should use fs write
const fs = require('fs');
const { fake } = require('faker');

/*
  Front end Change
  name
  color
  price
  image
*/

const color = [
  'red',
  'blue',
  'orange',
  'purple',
  'green',
  'yellow',
  'brown',
  'white',
  'black',
];

const writeFile = fs.createWriteStream('./client/fakeData.csv');

writeFile.write('name', 'price', 'color', 'image');

// example of Faker fake('{{name.lastName}}, {{name.firstName}}'));

//fakeData for Seeding:

for (let i = 0; i < n; i++) {
  //fake price
  const randomPrice = `$${Math.floor(Math.random() * (300 - 100)) + 100}`;
  //to genarate 3 random colors;
  const randomColorArr = color.sort(() => 0.5 - Math.random());
  const selectColor = randomColorArr.slice(0, 3);
  //fake ProductName
  const productName = fake('{{name.lastName}}_{{address.zipCode}}');

  writeFile.write(
    `${productName} | ${randomPrice} | ${selectColor} | https://loremflickr.com/g/320/240/paris?lock=${Math.floor(
      Math.random() * 1000
    )} \n`
  );
}
file.end();

// const seed1mil = (numsOfTimes, numsOfData) => {
//   let count = 0;
//   if (numsOfTimes > count) {
//     testWriteFile(numsOfData);
//     count += 1;
//   }
// };

// randomImg('https://loremflickr.com/g/320/240/paris', 1000);
// testWriteFile(2);
// seed1mil(2, 8000);

/*
const ProductPostgres = postgres.define(
  "product",
  {
    _id:{type:seq.INTEGER, autoIncrement:true, primaryKey:true, allowNull:false},
    name:{type:seq.STRING, allowNull:false},
    price:{type:seq.FLOAT, allowNull:false},
    featured:{type:seq.STRING},
    options:{type:seq.TEXT},
    images:{type:seq.TEXT},
    colors:{type:seq.STRING}, 
    sizes:{type:seq.STRING},
    quantity:{type:seq.INTEGER}, 
    inventory:{type:seq.BOOLEAN}, 
    status:{type:seq.SMALLINT},
    favorite:{type:seq.BOOLEAN},
    shipping:{type:seq.SMALLINT}, 
    category:{type:seq.STRING},
    review_count:{type:seq.INTEGER}, 
    stars:{type:seq.INTEGER}
  },
*/
