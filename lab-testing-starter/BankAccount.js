class InsufficientBalanceError extends Error {}
class IncorrectPinError extends Error {}
class AccountFrozenError extends Error {}

export default class BankAccount {
  constructor(pin) {
    this.balance = 0;
    this.pin = pin;
    this.isFrozen = false;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount, pin) {
    try {
      if (this.isFrozen) {
        throw new AccountFrozenError("Withdrawal failed: account is frozen.");
      }

      if (pin !== this.pin) {
        throw new IncorrectPinError("Withdrawal failed: incorrect PIN.");
      }

      if (this.balance < amount) {
        throw new InsufficientBalanceError(
          "Withdrawal failed: insufficient balance."
        );
      }

      this.balance -= amount;
      return amount;
    } catch (error) {
      console.error(error);
    }
  }

  freezeAccount() {
    this.isFrozen = true;
  }

  unfreezeAccount() {
    this.isFrozen = false;
  }
}
