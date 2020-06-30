import { 
    verifyAge, 
    User, 
    NACIONALITY,
    LOCATION, 
    Casino,

 } from "../src/data/UserCassinoDataBase";


describe("Testing UserCassinoDataBase", () => {

    test(" brazilian authorized", () => {
        const brazilian: User = {
          name: "Marilda Sotomayor",
          age: 55,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Matemática Top",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.authorized).toEqual(["Marilda Sotomayor"]);
    });

    test("american authorized", () => {
        const american: User = {
          name: "Carl Sagan",
          age: 20,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Uma galáxia muito louca",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [american]);
        expect(result.americans.authorized).toEqual(["Carl Sagan"]);
    });

    test("2 american authorized and 2 brazilian unauthorized", () => {
        const american: User = {
          name: "Carl Sagan",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
        const brazilian: User = {
            name: "Marilda Sotomayor",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN,
        };    
        const casino: Casino = {
          name: "Balada das baladas tops",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(
            casino,
            [american,
            american,
            brazilian,
            brazilian]
            );
        expect(result.americans.authorized).toEqual(["Carl Sagan","Carl Sagan"]);
        expect(result.brazilians.unauthorized).toEqual(["Marilda Sotomayor","Marilda Sotomayor"]);
    });

    test("1 brazilian authorized", () => {
        const brazilian: User = {
            name: "Marilda Sotomayor",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
            name: "Matemática Top",
            location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.authorized.length).toBeLessThan(2);
        expect(result.brazilians.authorized.length).toBeGreaterThan(0);
    });

    test("1 american authorized", () => {
        const american: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [american]);
        expect(result.americans.unauthorized.length).toBe(0);
    });

    // test("No one authorized", () => {
    //     const american: User = {
    //         name: "Carl Sagan",
    //         age: 19,
    //         nacionality: NACIONALITY.AMERICAN,
    //     };
    //     const brazilian: User = {
    //         name: "Marilda Sotomayor",
    //         age: 19,
    //         nacionality: NACIONALITY.BRAZILIAN,
    //     };    
    //     const casino: Casino = {
    //         name: "Balada das baladas tops",
    //         location: LOCATION.EUA,
    //     };      
    
    //     const result = verifyAge(casino, [
    //         american,
    //         american,
    //         brazilian,
    //         brazilian,
    //     ]);
    //     expect(result.brazilians.unauthorized).toContain(["Marilda Sotomayor"]);
    //     expect(result.americans.unauthorized).toContain(["Carl Sagan"]);
    // });

    // test("2 american authorized and 2 brazilians unauthorized", () => {
    //     const american: User = {
    //         name: "Carl Sagan",
    //         age: 19,
    //         nacionality: NACIONALITY.AMERICAN,
    //     };
    //     const brazilian: User = {
    //         name: "Marilda Sotomayor",
    //         age: 19,
    //         nacionality: NACIONALITY.BRAZILIAN,
    //     };    
    //     const casino: Casino = {
    //         name: "Balada das baladas tops",
    //         location: LOCATION.EUA,
    //     };
    
    //     const result = verifyAge(casino, [
    //       brazilian,
    //       brazilian,
    //       american,
    //       american,
    //     ]);
    //     expect(result.brazilians.unauthorized.length).toBeGreaterThan(1);
    //     expect(result.americans.unauthorized.length).toBeLessThan(1);
    //     expect(result.americans.authorized.length).toBe(2);
    // });
      
});