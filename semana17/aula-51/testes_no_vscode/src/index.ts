import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";

dotenv.config();
const app = express();

app.use(express.json());


const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

try{
  const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    console.log(result[0][0]);
  }

}catch (error){
  console.error(error.message);
}

try{
    const getActorByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = '${name}'
        `)
      
          console.log(result[0][0])
    }
    //getActorByName("Juliana Paes");
}catch (error){
    console.error(error.message);
};
    
try{
  const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
   
    const count = result[0][0].count;
    console.log(count);
  };
  //getActorsByGender("female");
}catch (error){
  console.error(error.message);
}

try{
  const modifyActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
      
  };  
  //modifyActor("003", 576000)
  
}catch (error){
  console.error(error.message);
}

try{
  const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
      .delete()
      .where("id", id);
      
  };  
  //deleteActor("002")
  
}catch (error){
  console.error(error.message);
}

try{
  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    console.log(result[0].average);
  };
  //avgSalary("female"); 
}catch (error){
  console.error(error.message);
}



// app.get("/actor", async (req: Request, res: Response) => {
//   try {
//     const gender = req.body.gender 

//     const count = await connection.raw(`
//       SELECT COUNT(*) FROM Actor
//       WHERE gender = ${gender}
//     `)
    
//     res.status(200).send({
//       quantity: count,
//     });
//   } catch (error) {
//     res.status(400).send({
//       message: error.message,
//     });
//   }
// });

// try{
//   const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT (*) FROM Actor WHERE gender = '${gender}'
//     `)
  
//       console.log(result[0][0])
// }
// }catch (error){
//   console.error(error.message)
// }

// app.get("/actor", async (req: Request, res: Response) => {
//   try {
//     const count = await countActors(req.query.gender as string);
//     res.status(200).send({
//       quantity: count,
//     });
//   } catch (error) {
//     res.status(400).send({
//       message: error.message,
//     });
//   }
// });
app.post("/actor", async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const newSalary = req.body.salary

    await connection.raw(`
      UPDATE Actor 
      SET salary = ${newSalary} 
      WHERE id = ${id}
    `);

    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.delete("/actor", async (req: Request, res: Response)=>{
  try{
      const id = req.body.id;

     await connection.raw(`
          DELETE FROM Actor
          WHERE id = "${id}"
      `);

      res.status(200).send({message: "Ator apagado com sucesso"});
  }catch(err){
      res.status(400).send({error: err.message});
  }
})

app.post("/movie", async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const title = req.body.tytle
    const synopsis = req.body.synopsis
    const release_Date = req.body.release_Date
    const rating = req.body.rating
    const playing_limit_date = req.body.playing_limit_date

    await connection.raw(`
      INSERT INTO Movie 
      VALUES (
        "${id}","${title}","${synopsis}","${release_Date}","${rating}","${playing_limit_date}"
      )
    `);

    res.status(200).send({
      message: "Filme cadastrado com sucesso",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `);

    res.status(200).send({
      movies: result[0] ,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    
    const data = req.body.search_term

    const result = await connection.raw(`
      SELECT * FROM Movie
      WHERE synopsis = "%${data}%" OR title = "%${data}%"
      ORDER BY release_Date ASC
    `);

    res.status(200).send({
      movies: result[0] ,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    
    const gender = req.body.gender

    const result = await connection.raw(`
      SELECT COUNT * 
      FROM Actor
      WHERE gender = "${gender}"       
    `);

    res.status(200).send({
      Actors: result[0] ,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


