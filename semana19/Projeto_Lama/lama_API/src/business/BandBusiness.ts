import { BandDataBase } from "../data/BandDataBase";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness{
    private bandDataBase = new BandDataBase();
    private idGenerator = new IdGenerator();

    public async addBand(
      name: string, 
      music_genre: string, 
      responsible: string,       
      ) : Promise<any> {
      await this.bandDataBase.addBand(name, music_genre, responsible);      
    };
             
};
