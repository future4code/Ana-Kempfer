import { BaseDataBase } from "./BaseDataBase";
import { IdGenerator } from "../services/IdGenerator";

export class BandDataBase extends BaseDataBase {

    static TABLE_NAME: string = "Lama_Bands";
    private idGenerator = new IdGenerator();

    public async addBand(
        name: string, 
        music_genre: string, 
        responsible: string,        
        ){
        try {
            const id = this.idGenerator.generate();

            await super.getConnection().raw(`
                INSERT INTO Lama_Bands(
                    id, 
                    name, 
                    music_genre, 
                    responsible,                    
                )
                VALUES
                (
                "${id}",
                "${name}",
                "${music_genre}",
                "${responsible}",
                )
                `);                
        }catch(err){
            throw new Error(err.message);
        }
        
    };

    // public async getUserByEmail(email: string): Promise<any> {
    //     try{
    //         const result = await this.getConnection()
    //             .select("*")
    //             .from("Lama_Users")
    //             .where({ email });                
    //         return result[0];   
    //     }catch (err){
    //         throw new Error(err.message)
    //     }
    // }; 

    // public async getUserById(id: string) {
    //     try {
    //         const result = await this.getConnection().raw(`
    //             SELECT * FROM Lama_Users
    //             WHERE id = "${id}"
    //         `)
    //         return result[0]
    //     }catch(err) {
    //         throw new Error(err.message);
    //     }
    // };
   
        
};
