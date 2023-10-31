import prisma from './lib/prisma';

// Simple Select Usage
const selectUsage = async () => {
    const user = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        select: {
            id: true,
            name: true,
            email: true,
            posts: {
                select: {
                    id: true,
                    title: true,
                    content: true,
                },
            },
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

export default selectUsage;
