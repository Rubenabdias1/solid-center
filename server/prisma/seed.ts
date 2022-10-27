import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const ruben = await prisma.user.upsert({
    where: { email: 'ruben@rnunez.dev' },

    update: {},

    create: {
      email: 'ruben@rnunez.dev',
      username: 'rubenabdias1',
      firstName: 'Ruben',
      lastName: 'Nunez',
      password: await argon2.hash('test123'),
    },
  });

  const men = await prisma.category.upsert({
    where: { name: 'Men' },

    update: {},

    create: {
      name: 'Men',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0004/4885/6125/files/collections-men.jpg?v=1526942544',
    },
  });

  const women = await prisma.category.upsert({
    where: { name: 'Women' },

    update: {},

    create: {
      name: 'Women',
      imgURL:
        'https://n.nordstrommedia.com/id/a021b565-1c0b-43f0-800c-fa06b45d1fe1.jpeg?h=417&w=1334',
    },
  });

  const shoes = await prisma.category.upsert({
    where: { name: 'Shoes' },

    update: {},

    create: {
      name: 'Shoes',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-1648630488.jpg',
    },
  });

  const kids = await prisma.category.upsert({
    where: { name: 'Kids' },

    update: {},

    create: {
      name: 'Kids',
      imgURL:
        'https://image.cnbcfm.com/api/v1/image/106032900-1563825608021rockets.jpg?v=1563825858',
    },
  });

  const other = await prisma.category.upsert({
    where: { name: 'Other' },

    update: {},

    create: {
      name: 'Other',
      imgURL:
        'https://cache.net-a-porter.com/content/images/story-head-content-1stFebruary2021-1611749733226.jpeg/w1900_q65.jpeg',
    },
  });
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Wine - Shiraz South Eastern',
        price: 93.15,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Flour - Corn, Fine',
        price: 20.44,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Cookies - Englishbay Chochip',
        price: 44.46,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pail - 4l White, With Handle',
        price: 36.25,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Bay Leaf',
        price: 23.13,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Tart - Pecan Butter Squares',
        price: 18.9,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Apple - Northern Spy',
        price: 24.29,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Ice Cream Bar - Rolo Cone',
        price: 90.97,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Sausage - Chorizo',
        price: 27.36,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Fruit Mix - Light',
        price: 27.71,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Beef - Top Butt',
        price: 29.68,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Nantucket Orange Juice',
        price: 38.43,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Cake - Mini Potato Pancake',
        price: 81.91,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Coriander - Ground',
        price: 53.26,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Wine - Red, Lurton Merlot De',
        price: 51.4,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Lettuce - Sea / Sea Asparagus',
        price: 90.33,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Cheese - Le Cru Du Clocher',
        price: 48.96,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Calaloo',
        price: 75.87,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Flower - Daisies',
        price: 89.9,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Bread - English Muffin',
        price: 18.48,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Rosemary - Fresh',
        price: 59.06,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Oil - Sesame',
        price: 53.48,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Sauce - Oyster',
        price: 6.79,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Tarts Assorted',
        price: 4.11,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Napkin White - Starched',
        price: 9.59,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Coke - Classic, 355 Ml',
        price: 2.6,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Bouq All Italian - Primerba',
        price: 19.59,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Muffin - Carrot Individual Wrap',
        price: 61.04,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Longos - Penne With Pesto',
        price: 96.7,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Juice - Orange 1.89l',
        price: 81.52,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Table Cloth 62x120 Colour',
        price: 61.37,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Salmon - Atlantic, No Skin',
        price: 52.4,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Beer - True North Strong Ale',
        price: 77.54,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Cake - Mini Potato Pancake',
        price: 78.59,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Couscous',
        price: 57.07,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pie Shell - 5',
        price: 77.15,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Pickles - Gherkins',
        price: 49.27,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Yogurt - Plain',
        price: 43.31,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Doilies - 8, Paper',
        price: 59.0,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Mix Pina Colada',
        price: 67.97,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Wine - Red, Cabernet Sauvignon',
        price: 8.95,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Beets',
        price: 92.26,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Venison - Striploin',
        price: 86.5,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Basil - Fresh',
        price: 70.8,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Milk Powder',
        price: 97.02,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Ginger - Ground',
        price: 11.61,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Doilies - 5, Paper',
        price: 34.75,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Tea - Lemon Green Tea',
        price: 11.08,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Squeeze Bottle',
        price: 14.93,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Fond - Neutral',
        price: 65.38,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Chicken - Breast, 5 - 7 Oz',
        price: 29.96,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pineapple - Regular',
        price: 28.0,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Taro Root',
        price: 55.82,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Bread - White Mini Epi',
        price: 17.04,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Long Island Ice Tea',
        price: 42.56,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Wine - Chateau Bonnet',
        price: 58.39,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Rum - Light, Captain Morgan',
        price: 94.27,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Liners - Banana, Paper',
        price: 43.24,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Tea - Green',
        price: 44.09,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Dates',
        price: 61.81,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Mushroom - Morels, Dry',
        price: 35.87,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Melon - Honey Dew',
        price: 46.34,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Muffins - Assorted',
        price: 2.34,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Tea - Decaf Lipton',
        price: 56.97,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Sugar - White Packet',
        price: 1.59,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Wine - Remy Pannier Rose',
        price: 86.81,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Sauce - Ranch Dressing',
        price: 22.0,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Edible Flower - Mixed',
        price: 71.79,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Haggis',
        price: 87.52,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Doilies - 10, Paper',
        price: 4.75,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Ocean Spray - Ruby Red',
        price: 56.4,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Nut - Chestnuts, Whole',
        price: 11.5,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Tequila Rose Cream Liquor',
        price: 45.31,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Watercress',
        price: 45.05,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Milkettes - 2%',
        price: 1.55,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Oil - Truffle, Black',
        price: 99.66,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Squash - Pattypan, Yellow',
        price: 32.65,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/cc0000/ffffff',
        name: 'Cumin - Whole',
        price: 33.23,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Soup - Campbells, Cream Of',
        price: 73.96,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'V8 - Vegetable Cocktail',
        price: 84.55,
        categoryId: 3,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Cheese - Brick With Pepper',
        price: 16.64,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Wanton Wrap',
        price: 27.76,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pastry - Apple Large',
        price: 33.92,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Cake - French Pear Tart',
        price: 52.38,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Cod - Fillets',
        price: 66.9,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Beets - Mini Golden',
        price: 97.61,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Water - San Pellegrino',
        price: 47.37,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Higashimaru Usukuchi Soy',
        price: 19.83,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pimento - Canned',
        price: 25.16,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/5fa2dd/ffffff',
        name: 'Crackers - Soda / Saltins',
        price: 36.72,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Duck - Breast',
        price: 75.63,
        categoryId: 4,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Dc - Sakura Fu',
        price: 68.92,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Jam - Blackberry, 20 Ml Jar',
        price: 19.47,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Rum - Coconut, Malibu',
        price: 56.39,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Wakami Seaweed',
        price: 95.83,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Shopper Bag - S - 4',
        price: 52.9,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Yucca',
        price: 16.61,
        categoryId: 1,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Pesto - Primerba, Paste',
        price: 86.41,
        categoryId: 5,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/dddddd/000000',
        name: 'Plastic Arrow Stir Stick',
        price: 52.8,
        categoryId: 2,
      },
      {
        imgURL: 'http://dummyimage.com/500x500.png/ff4444/ffffff',
        name: 'Dried Apple',
        price: 20.65,
        categoryId: 5,
      },
    ],
  });

  console.log({ ruben, categories: [men, women, kids, shoes, other] });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    throw new Error();
  });
