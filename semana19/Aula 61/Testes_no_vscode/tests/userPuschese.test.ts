import { performPurchase, User} from "../src/data/UserDatabase";

describe("Testing UserDataBase", () => {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Margaret Hamilton",
            balance: 200
        }

        const result = performPurchase(user, 30)
        
        expect(result).toEqual({
            ...user,
            balance: 170
        })
    });

    test("Testing balance equal than value", () => {
        const user: User = {
            name: "Margaret Hamilton",
            balance: 200
        }
        const result = performPurchase(user, 200)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    });

    test("Testing balance less than value", () => {
        const user: User = {
            name: "Margaret Hamilton",
            balance: 200
        }
        const result = performPurchase(user, 300)
        
        expect(result).toEqual(undefined)
    });
})








