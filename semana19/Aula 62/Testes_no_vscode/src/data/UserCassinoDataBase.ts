
export function verifyAge(casino: Casino, users: User[]): Result {

    const authorized: User[] = [];
    const unauthorized: User[] = [];
  
    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
            authorized.push(user);
            } else {
            unauthorized.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
            authorized.push(user);
            } else {
            unauthorized.push(user);
            }
            break;
        }
    };
  
    return {
        brazilians: {
            authorized: authorized
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
            
            unauthorized: unauthorized
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
        },
        americans: {
            authorized: authorized
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),

            unauthorized: unauthorized
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
        },
    };
};


//IMPUT

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}
  
export interface Casino {
    name: string;
    location: LOCATION;
}

//OUTPUT

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
export interface ResultItem {
    authorized: string[];
    unauthorized: string[];
}







