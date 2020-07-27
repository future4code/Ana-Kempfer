import { BaseDataBase } from "./BaseDataBase";
import { IdGenerator } from "../services/IdGenerator";

export class UserDatabase extends BaseDataBase {

    static TABLE_NAME: string = "Lama_Users";
    private idGenerator = new IdGenerator();

    public async signup(
        name: string, 
        email: string, 
        password: string, 
        role: string, 
        device: string
        ){
        try {
            const id = this.idGenerator.generate();

            await super.getConnection().raw(`
                INSERT INTO Lama_Users(
                    id, 
                    name, 
                    email, 
                    password, 
                    role, 
                    device
                )
                VALUES
                 (
                "${id}",
                "${name}",
                "${email}",
                "${password}",
                "${role}", 
                "${device}"
                )
                `);                
        }catch(err){
            throw new Error(err.message);
        }
        
    };

    public async getUserByEmail(email: string): Promise<any> {
        try{
            const result = await this.getConnection()
                .select("*")
                .from("Lama_Users")
                .where({ email });                
            return result[0];   
        }catch (err){
            throw new Error(err.message)
        }
    }; 

    public async getUserById(id: string) {
        try {
            const result = await this.getConnection().raw(`
                SELECT * FROM Lama_Users
                WHERE id = "${id}"
            `)
            return result[0]
        }catch(err) {
            throw new Error(err.message);
        }
    };
   
        
};
