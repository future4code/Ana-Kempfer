
import { validateCharacter } from "../src/UserDataBase"


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

});






























