import React from "react";
import { classicBooks } from "./bookList";
import authors from "./authorList";
import {describe, expect, jest, test} from '@jest/globals';


//test that a book excists; that a name and an author isnt empty, that it's a string 

describe("testing classicBook list", () => {
    test("lenght > 0", () => {
        expect(classicBooks.length).toBeGreaterThan(0)
    });
    test("each entry has 3 attributes", () => {
        for(const dict of classicBooks) {
            expect(Object.keys(dict).length).toBe(3);
        }
    });
    test("id is a positive number, other 2 are not strings", () => {
        for(const dict of classicBooks) {
            //id check below
            expect(typeof dict[Object.keys(dict)[0]]).toBe("number");
            
            //the initial id is 1
            // expect(Object.keys(dict)[Object.keys(dict)[0]]).toBeGreaterThan(0);
            expect(dict[Object.keys(dict)[0]]).toBeGreaterThan(0);

            //strings check below
            expect(typeof dict[Object.keys(dict)[1]]).toBe("string");
            expect(typeof dict[Object.keys(dict)[2]]).toBe("string");
            expect(dict[Object.keys(dict)[1]].length).toBeGreaterThan(0);
            expect(dict[Object.keys(dict)[2]].length).toBeGreaterThan(0);
            // expect(Object.keys(dict)[Object.keys(dict)[1]].length).toBeGreaterThan(0);
            // expect(Object.keys(dict)[Object.keys(dict)[2]].length).toBeGreaterThan(0);
            
        }
    })
    test("an author exists in uniqueAuthors", () => {
        for(const dict of classicBooks) {
            let name = dict.authorName
            expect(authors).toContain(name);
        }

    })
})


