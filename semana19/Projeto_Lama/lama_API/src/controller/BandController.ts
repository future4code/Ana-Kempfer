import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";
import { BaseDataBase } from "../data/BaseDataBase";
import { AddBandInputDTO } from "../dto/BandDTO";

const authenticator = new Authenticator();

export class BandController {
    
  async addBand(req: Request, res: Response): Promise<void>{
    try {

      const token = req.headers.authorization as string;
      auth.getData(token);      

      const userData: AddBandInputDTO = {
        name: req.body.name,
        music_genre: req.body.music_genre,
        responsible: req.body.responsible        
      }
            
      await BandBusiness.addBand(
        userData.name,
        userData.music_genre,
        userData.responsible       
      );
      
      res.status(200).send({ 
        message: "Band successfully added."
       });
    }catch(err){
      res.status(400).send({ error: err.message });
    }
    await BaseDataBase.destroyConnection();
  };
    
}
