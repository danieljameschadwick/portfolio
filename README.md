# portfolio

My personal portfolio for danielchadwick.co.uk hosting my: skills, technologies and work.

## UI

Splash                    | 
:-------------------------:|
![Scores page on desktop.](./docs/portfolio-splash.png) |

## frontend

NextJS deployed on Vercel, using API routes with Prisma, MySQL hosted on Planetscale.

## backend

Currently using NextJS API routes, deployed to a serverless function in Vercel.

### Database

To make changes to the database, run:

```
yarn prisma:migrate dev --name <name>
```

> Note: prisma migrate is not currently supported on the MongoDB provider.
