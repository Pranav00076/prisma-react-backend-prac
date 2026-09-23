npm i --save-dev prisma@7.10.0
npm i @prisma/client
npx prisma init
npx prisma migrate dev --name init (init is just message)
npx prisma generate

- Changing schema (making tables)

## Postgres v/s Prisma
postgres | prisma
Databse | Database
Table | Model
Columns | Fields
Rows | Object

# Making Table (Schema)

bash ```
model User{
  id  Int   @id @default(autoincrement())
  name  String  
  email String @unique
}
```
