import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness{
    private userDatabase = new UserDatabase();
    private idGenerator = new IdGenerator();

    public async signup(
      name: string, 
      email: string, 
      password: string, 
      role: string,
      device: string
      ) : Promise<string>{
      const id = this.idGenerator.generate();
      await this.userDatabase.signup(name, email, password, role, device);
      return id;
    };

    public async login(email: string): Promise<any> {
      await this.userDatabase.getUserByEmail(email);
    };         
};
