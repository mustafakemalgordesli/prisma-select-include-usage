import prisma from './lib/prisma';

// Simple Include Usage
const includeUsage = async () => {
    console.time('include time');
    for (let i = 0; i < 100; i++) {
        await prisma.user.findUnique({
            where: {
                id: 1,
            },
            include: {
                posts: true,
            },
        });
    }
    console.timeEnd('include time');
    // 100x runtime: 359.538ms

    const user = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        include: {
            posts: true,
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

export default includeUsage;
