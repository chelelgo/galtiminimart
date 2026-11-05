import { describe, expect, it } from "vitest";
import { calculateDelivery, calculateDiscount, calculateLoyaltyPoints, type SavedOrder } from "@/data/orders";

describe("basket and loyalty rules", () => {
  it("waives delivery at KSh 2,000 and charges KSh 99 below it", () => {
    expect(calculateDelivery(1999)).toBe(99);
    expect(calculateDelivery(2000)).toBe(0);
  });

  it("applies GALTI10 as a 10% basket discount", () => {
    expect(calculateDiscount(1250, "GALTI10")).toBe(125);
    expect(calculateDiscount(1250, "OTHER")).toBe(0);
  });

  it("earns one point per complete KSh 100 spent", () => {
    const orders = [{ total: 999 }, { total: 1250 }] as SavedOrder[];
    expect(calculateLoyaltyPoints(orders)).toBe(22);
  });
});