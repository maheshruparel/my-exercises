/* eslint-disable no-useless-escape */
/* eslint-disable arrow-body-style */

function SavingsAccount(...accountInformation) {
  const [accountNumber, email, firstName, lastName, products] = accountInformation;

  this.information = {
    accountNumber,
    email,
    firstName,
    lastName,
    products: products || [],
  };

  this.isValidInformation = () => {
    if (!this.isValidAccountNumber()) {
      throw new Error('Account Number must be a 6-digit number');
    }
    if (!this.isValidEmail()) {
      throw new Error('Invalid e-mail');
    }
    if (!this.isValidFirstName()) {
      throw new Error('First name must be between 3 and 20 characters long');
    }
    if (!this.isValidLastName()) {
      throw new Error('Last name must contain english alphabets only');
    }
    return true;
  };

  this.isValidAccountNumber = () => {
    return this.getAccountNumber().length !== 6;
  };

  this.isValidEmail = () => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return this.getEmail().match(emailPattern);
  };

  this.isValidFirstName = () => {
    const nameLength = this.getFirstName().length;
    return nameLength >= 3 && nameLength <= 20;
  };

  this.isValidLastName = () => {
    const digitPattern = /\d/;
    return !this.getLastName().match(digitPattern);
  };

  this.getAccountNumber = () => {
    return this.information.accountNumber;
  };

  this.getEmail = () => {
    return this.information.email;
  };

  this.getFirstName = () => {
    return this.information.firstName;
  };

  this.getLastName = () => {
    return this.information.lastName;
  };

  this.getProducts = () => {
    return this.information.products;
  };

  if (this.isValidInformation()) {
    return this.information;
  }
}

export {
  SavingsAccount,
};
