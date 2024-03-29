import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const ownerRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }, 
    Variables: {
        userId: string;
    }
}>();

ownerRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
});

ownerRouter.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const owner = await prisma.owner.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name,
            license : body.license,
            location : body.location
          }
    })

    return c.json({
        id: owner.id
    })
})

ownerRouter.put('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const owner = await prisma.owner.update({
        where: {
            id: body.id
        }, 
        data: {
            email: body.email,
            password: body.password
        }
    })

    return c.json({
        id: owner.id
    })
})

// Todo: add pagination
ownerRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const owners = await prisma.owner.findMany({
        select: {
            name: true,
            location: true,
            id: true
        }
    });

    return c.json({
        owners
    })
})

ownerRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const owner = await prisma.owner.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                location: true
            }
        })
    
        return c.json({
            owner
        });
    } catch(e) {
        c.status(411);
        return c.json({
            message: "Error while fetching owner post"
        });
    }
})