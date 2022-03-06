import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Doller } from "../src/money.ts";
import { Franc } from "../src/money.ts";

Deno.test("Multiplication", () => {
    const five: Doller = new Doller(2);
    assertEquals(new Doller(10), five.times(5));
    assertEquals(new Doller(6), five.times(3));
})

Deno.test("equals", () => {
    assertEquals(true,new Doller(5).equals(new Doller(5)));
    assertEquals(false,new Doller(5).equals(new Doller(6)));
    assertEquals(true,new Franc(5).equals(new Franc(5)));
    assertEquals(false,new Franc(5).equals(new Franc(6)));
    assertEquals(false,new Franc(5).equals(new Doller(5)));
})

Deno.test("FrancMultiplication", () => {
    const five: Franc = new Franc(2);
    assertEquals(new Franc(10), five.times(5));
    assertEquals(new Franc(6), five.times(3));
})
