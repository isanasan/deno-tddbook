import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Franc } from "../src/money.ts";
import { Money } from "../src/money.ts";

Deno.test("Multiplication", () => {
    const five: Money = Money.doller(2);
    assertEquals(Money.doller(10), five.times(5));
    assertEquals(Money.doller(6), five.times(3));
})

Deno.test("equals", () => {
    assertEquals(true,Money.doller(5).equals(Money.doller(5)));
    assertEquals(false,Money.doller(5).equals(Money.doller(6)));
    assertEquals(true,new Franc(5).equals(new Franc(5)));
    assertEquals(false,new Franc(5).equals(new Franc(6)));
    assertEquals(false,new Franc(5).equals(Money.doller(5)));
})

Deno.test("FrancMultiplication", () => {
    const five: Franc = new Franc(2);
    assertEquals(new Franc(10), five.times(5));
    assertEquals(new Franc(6), five.times(3));
})
