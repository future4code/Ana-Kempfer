
import { 
    validateCharacter, 
    Character,
    performAttack
aq} from "../src/UserDataBase"


describe("Testing validateCharacter", () => {
    test("Should return false for empty name", async () => {
        const result = validateCharacter({
            name: "",
            life: 1000,
            strength: 500,
            defense: 500,
        });      
        expect(result).toBe(false);
    });

    test("Should return false for empty life", async () => {
        const result = validateCharacter({
            name: "Bananinha",
            life: 0,
            strength: 500,
            defense: 500,
        });      
        expect(result).toBe(false);
    });

    test("Should return false for empty strength", async () => {
        const result = validateCharacter({
            name: "Bananinha",
            life: 1000,
            strength: 0,
            defense: 500,
        });      
        expect(result).toBe(false);
    });

    test("Should return false for empty strength", async () => {
        const result = validateCharacter({
            name: "Bananinha",
            life: 1000,
            strength: 0,
            defense: 500,
        });      
        expect(result).toBe(false);
    });
    
    test("Should return true for life 0", async () => {
        const result = validateCharacter({
            name: "Bananinha",
            life: 0,
            strength: 500,
            defense: 500,
        });      
        expect(result).toBe(true);
    });

    test("Should return true for valid inputs", async () => {
        const result = validateCharacter({
            name: "Bananinha",
            life: 1000,
            strength: 500,
            defense: 500,
        });      
        expect(result).toBe(true);
    });

    // test("Creating Mocks", () => {
    //     const validatorMock = jest.fn(() => {
    //         return true
    //     });       

    // });

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Bananinha",
          life: 1000,
          defense: 500,
          strength: 500,
        };
    
        const defender: Character = {
          name: "Tomatinho",
          life: 1000,
          defense: 400,
          strength: 400,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(800);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    test("Should invalid character error", () => {
        expect.assertions(4);

        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
            name: "Bananinha",
            life: 1000,
            defense: 500,
            strength: 500,
        };
      
        const defender: Character = {
            name: "Tomatinho",
            life: 1000,
            defense: 400,
            strength: 400,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
    });      

});


































