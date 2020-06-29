//import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
// import { SignupInputDTO } from "../dto/UserDTO";
// import { RefreshTokenDataBase } from "../data/RefreshTokenDatabase";
// import { UserDatabase } from "../data/UserDatabase";
 
const userBusiness: UserBusiness = new UserBusiness();
const authenticator = new Authenticator();
const hashManager = new HashManager();

export class UserController {
    
  // async signup(req: Request, res: Response): Promise<void> {
  //   try {
  //     const userData: SignupInputDTO = {
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       device: req.body.device
  //     }
            
  //     const hashManager = new HashManager();
  //     const hashPassword = await hashManager.hash(userData.password);

  //     const id = await userBusiness.signup(userData.name, userData.email, hashPassword);

  //     const accessToken = authenticator.generateToken({ 
  //       id
  //     }, process.env.ACCESS_TOKEN_EXPIRES_IN);

  //     const refreshToken = authenticator.generateToken({
  //       id, 
  //       device: userData.device
  //     }, process.env.REFRESH_TOKEN_EXPIRES_IN);

  //     res.status(200).send({ accessToken, refreshToken });

  //     } catch (err) {
  //       res.status(400).send({ error: err.message });
  //     }
  // }  
 
}
