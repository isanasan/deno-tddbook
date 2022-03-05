import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Doller } from "../src/money.ts";

Deno.test("Multiplication", () => {
    const five: Doller = new Doller(2);
    const product1: Doller = five.times(5);
    assertEquals(10, product1.amount);
    const product2: Doller = five.times(3);
    assertEquals(6, product2.amount);
})

Deno.test("equals", () => {
    assertEquals(true,new Doller(5).equals(new Doller(5)));
})