const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/notes', async(req, res, next)=> {
    try {
      res.send(await prisma.note.findMany());
    }
    catch(ex){
      next(ex);
    }
});

app.delete('/api/notes/:id', async(req, res, next)=> {
    try {
      await prisma.note.delete({
        where: {
          id: req.params.id*1
        }
      });
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
});

app.put('/api/notes/:id', async(req, res, next)=> {
    try {
      res.send(
        await prisma.note.update(
          {
            data: req.body,
            where: {
              id: req.params.id*1
            }
          }
        )
      );
    }
    catch(ex){
      next(ex);
    }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ message: err.message || err});
});


const prisma = new PrismaClient();

const init = async()=> {
    await prisma.note.deleteMany({});
    const foo = await prisma.note.create({ data: { name: 'foo', ranking: 2}});
    const bar = await prisma.note.create({ data: { name: 'bar', ranking: 1}});
    const notes = await prisma.note.findMany(); 
    console.log(notes);
    console.log('data seeded');
    
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
    console.log(`curl localhost:${port}/api/notes -d '{"name": "bazz", "ranking": 7}' -H "Content-Type:application/json" -X POST`);
    console.log(`curl localhost:${port}/api/notes/${foo.id} -X DELETE`);
    console.log(`curl localhost:${port}/api/notes/${bar.id} -d '{"name": "quq", "ranking": 7}' -H "Content-Type:application/json" -X PUT`);
    
};

init();