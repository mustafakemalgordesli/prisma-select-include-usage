import prisma from './lib/prisma';
import selectUsage from './select-usage';
import includeUsage from './include-usage';
// import seed from './seed';

// Seed data
// seed()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

// selectUsage()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// includeUsage()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// Using select and include together

const selectIncludeTogetherUsage = async () => {
    const user = await prisma.user.findUnique({
        where: {
            id: 1,
        },
    });

    // Result: {
    //     id: 1,
    //     email: 'm.kemalgordesli@gmail.com',
    //     name: 'Mustafa K. Gordesli',
    //     deleted: false,
    //     posts: [
    //         {
    //             id: 1,
    //             title: 'Post1',
    //             content: 'Post Content 1',
    //             published: false,
    //             deleted: false,
    //             authorId: 1,
    //         },
    //     ],
    // };
    return user;
};

// selectIncludeTogetherUsage()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
