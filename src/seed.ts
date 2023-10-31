import prisma from './lib/prisma';

async function main() {
    const user = await prisma.user.create({
        data: {
            email: 'm.kemalgordesli@gmail.com',
            name: 'Mustafa K. Gordesli',
        },
    });

    console.log(user);

    const posts = await prisma.post.createMany({
        data: [
            {
                title: 'Post1',
                content: 'Post Content 1',
                authorId: user.id,
            },
        ],
    });

    console.log(posts);
}

export default main;
