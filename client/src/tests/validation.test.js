import { describe, it, expect } from "vitest";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "../lib/validation";

describe("Validation Utility", () => {
  describe("validateUsername", () => {
    it("should return true for valid usernames", () => {
      expect(validateUsername("user123")).toBe(true);
      expect(validateUsername("john_doe")).toBe(true);
      expect(validateUsername("A123")).toBe(true);
    });

    it("should return false for too short or too long usernames", () => {
      expect(validateUsername("ab")).toBe(false);
      expect(validateUsername("thisnameiswaytoolongtobevalid123456789")).toBe(
        false,
      );
    });

    it("should return false for usernames with invalid characters", () => {
      expect(validateUsername("user@name")).toBe(false);
      expect(validateUsername("user space")).toBe(false);
    });
  });

  describe("validateEmail", () => {
    it("should return true for valid emails", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("user.name+label@sub.domain.org")).toBe(true);
    });

    it("should return false for invalid emails", () => {
      expect(validateEmail("invalid-email")).toBe(false);
      expect(validateEmail("@missing-local.com")).toBe(false);
      expect(validateEmail("missing@domain")).toBe(false);
    });
  });

  describe("validatePassword", () => {
    it("should return true for strong passwords", () => {
      expect(validatePassword("StrongPass123!")).toBe(true);
      expect(validatePassword("validA1@")).toBe(true);
    });

    it("should return false for weak passwords", () => {
      expect(validatePassword("weak")).toBe(false); // too short
      expect(validatePassword("alllowercase123!")).toBe(false); // no uppercase
      expect(validatePassword("ALLUPPERCASE123!")).toBe(false); // no lowercase
      expect(validatePassword("NoSpecialChar123")).toBe(false); // no special
    });
  });
});
