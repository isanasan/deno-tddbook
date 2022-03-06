import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Money } from "../src/money.ts";

Deno.test("Multiplication", () => {
  const five: Money = Money.doller(2);
  assertEquals(Money.doller(10), five.times(5));
  assertEquals(Money.doller(6), five.times(3));
});

Deno.test("equals", () => {
  assertEquals(true, Money.doller(5).equals(Money.doller(5)));
  assertEquals(false, Money.doller(5).equals(Money.doller(6)));
  assertEquals(true, Money.franc(5).equals(Money.franc(5)));
  assertEquals(false, Money.franc(5).equals(Money.franc(6)));
  assertEquals(false, Money.franc(5).equals(Money.doller(5)));
});

Deno.test("FrancMultiplication", () => {
  const five: Money = Money.franc(2);
  assertEquals(Money.franc(10), five.times(5));
  assertEquals(Money.franc(6), five.times(3));
});

Deno.test("Currency", () => {
  assertEquals("USD", Money.doller(1).getCurrency());
  assertEquals("CHF", Money.franc(1).getCurrency());
});
