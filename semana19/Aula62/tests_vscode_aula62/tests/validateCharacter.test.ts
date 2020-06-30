import { validateCharacter } from "../src/Data/UserDataBase";

describe("Testing validateCharacter", () => {
    test("Should return false for empty name", async () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
      
        expect(result).toBe(false);
    });


});






























