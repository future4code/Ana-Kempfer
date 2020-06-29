import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";
import { UserDB } from "./data/UserDataBase";
import { Authenticator } from "./services/Authenticator";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

const userDB = new UserDB();
const idManager = new IdGenerator;
const hashManager = new HashManager();
const auth = new Authenticator();

app.post("/signup", async (req: Request, res: Response) => {
  try{
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!userData.email && userData.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (!userData.password && userData.password.length < 6) {
      throw new Error("Invalid Password");
    }

    const id = idManager.generate();

    userDB.createUser(id, userData.email, userData.password);

    const token = auth.generateToken({id});

    res.status(200).send({
      token : token
    })
  }catch (err){
    res.status(400).send({
      message: err.message
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authData = auth.getData(token);
    const userInfo = await userDB.getUserById(authData.id);

    res.status(200).send({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});












