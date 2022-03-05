import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Doller } from "../src/money.ts";

Deno.test("Multiplication", () => {
    const five: Doller = new Doller(2);
    const product: Doller = five.times(5);
    assertEquals(10, product.amount);
    const product: Doller = five.times(3);
    assertEquals(6, product.amount);
})