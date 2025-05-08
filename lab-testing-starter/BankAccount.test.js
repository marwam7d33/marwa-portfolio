import { expect, beforeEach, describe, it } from "vitest";
import BankAccount from "./BankAccount.js";

// 1. Creating an account:
describe("BankAccount", () => {
  it("is created with correct details", () => {
    const account = new BankAccount("1234");

    expect(account).toBeInstanceOf(BankAccount);
    expect(account.balance).toEqual(0);
    expect(account.pin).toEqual("1234");
  });
});

// 2. Making a deposit:
describe("BankAccount", () => {
  it("we made a deposit of 100", () => {
    const account = new BankAccount("1234");
    expect(account.deposit(100));
  });
});

// 3a. Making a successful withdrawal
describe("BankAccount", () => {
  it("we made a withdrawal of 200", () => {
    const account = new BankAccount("1234");
    account.deposit(300);
    expect(account.withdraw(200, "1234"));
    expect(account.balance).toEqual(100);
  });
});

// 3c. Making a withdrawal with incorrect PIN
describe("BankAccount", () => {
  it("we made a withdrawal of 200 using incorrect pin", () => {
    const account = new BankAccount("1234");
    account.deposit(300);
    try {
      expect(account.withdraw(200, "4578"));
    } catch (error) {
      expect(error).toBeInstanceOf(IncorrectPinError);
      //balance will remain the same
      expect(account.balance).toEqual(300);
    }
  });
});

// 3b.Amount greater than balance
describe("BankAccount", () => {
  it("we made a withdrawal of 500", () => {
    const account = new BankAccount("1234");
    account.deposit(300);

    try {
      //this will not go through
      expect(account.withdraw(500, "1234"));
    } catch (error) {
      expect(error).toBeInstanceOf(InsufficientBalanceError);
      expect(account.balance).toEqual(300);
    }
    //balance remains the same
  });
});

//insufficient balance
describe("BankAccount", () => {
  it("we made a withdrawal of 500", () => {
    const account = new BankAccount("1234");
    account.deposit(300);

    try {
      //this will not go through
      expect(account.withdraw(500, "1234"));
    } catch (error) {
      expect(error).toBeInstanceOf(InsufficientBalanceError);
      expect(account.balance).toEqual(300);
    }
    //balance remains the same
  });
});

// 1. Creating an account:
describe("BankAccount", () => {
  it("is created with correct details and is not frozen", () => {
    const account = new BankAccount("1234");

    expect(account).toBeInstanceOf(BankAccount);
    expect(account.balance).toEqual(0);
    expect(account.pin).toEqual("1234");
    expect(account.isFrozen).toBe(false); // New assertion
  });
});

// 2. Freezing and unfreezing an account:
describe("BankAccount freezing functionality", () => {
  it("freezes and unfreezes an account", () => {
    const account = new BankAccount("1234");
    account.deposit(100);

    account.freezeAccount();
    expect(account.isFrozen).toBe(true); // Verify the account is frozen

    account.unfreezeAccount();
    expect(account.isFrozen).toBe(false); // Verify the account is unfrozen
  });

  it("prevents withdrawals when the account is frozen", () => {
    const account = new BankAccount("1234");
    account.deposit(300);
    account.freezeAccount(); // Freeze the account

    try {
      account.withdraw(100, "1234"); // Attempt a withdrawal
    } catch (error) {
      expect(error).toBeInstanceOf(AccountFrozenError); // Expect AccountFrozenError

      // Ensure balance remains unchanged
      expect(account.balance).toEqual(300);
    }
  });
});





// ALTERNATIVE DRY METHOD -- with one account created and stored inside beforeEach

// 1. Define a single account instance that will be used in all tests
describe("BankAccount freezing functionality", () => {
  let account;

  // Initialize the account before each test to ensure isolation
  beforeEach(() => {
    account = new BankAccount("1234");
    account.deposit(100); // Ensure a deposit is made to have a balance for testing
  });

  it("is created with correct details and is not frozen", () => {
    expect(account).toBeInstanceOf(BankAccount);
    expect(account.balance).toEqual(100); // Ensures deposit was made
    expect(account.pin).toEqual("1234");
    expect(account.isFrozen).toBe(false); // Account should not be frozen initially
  });

  it("freezes and unfreezes an account", () => {
    account.freezeAccount();
    expect(account.isFrozen).toBe(true); // Verify the account is frozen

    account.unfreezeAccount();
    expect(account.isFrozen).toBe(false); // Verify the account is unfrozen
  });

  it("prevents withdrawals when the account is frozen", () => {
    account.freezeAccount(); // Freeze the account

    try {
      account.withdraw(50, "1234"); // Attempt a withdrawal
    } catch (error) {
      expect(error).toBeInstanceOf(AccountFrozenError); // Expect AccountFrozenError
    }

    // Ensure balance remains unchanged
    expect(account.balance).toEqual(100);
  });

  it("allows withdrawals when the account is not frozen", () => {
    account.deposit(200);
    expect(account.balance).toEqual(300);

    account.withdraw(100, "1234");
    expect(account.balance).toEqual(200); // After withdrawal, balance should be 200
  });
});
