import { BaseDataBase } from "./BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class UserDatabase extends BaseDataBase {

    // static TABLE_NAME: string = "Labook_users";
    // private idGenerator = new IdGenerator();

    // public async signup(name: string, email: string, password: string) {
    //     try {
    //         const user_id = this.idGenerator.generate();

    //         await super.getConnection().raw(`
    //          INSERT INTO Labook_users(user_id, name, email, password)
    //          VALUES
    //              (
    //             "${user_id}",
    //             "${name}",
    //             "${email}",
    //             "${password}"
    //             )
    //             `);                
    //         } catch (err) {
    //             throw new Error(err.message);
    //         }
    // } 
        
};
