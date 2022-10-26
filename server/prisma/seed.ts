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
