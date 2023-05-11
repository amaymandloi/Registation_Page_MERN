class Registation {
  constructor(
    firstname,
    lastname,
    email,
    password,
    phoneNumber,
    address,
    contry,
    gender,
    qualification
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.contry = contry;
    this.gender = gender;
    this.qualification = qualification;
  }
  getfirstname() {
    return this.firstname;
  }
  getlastname() {
    return this.lastname;
  }
  getemail() {
    return this.email;
  }
  getpassword() {
    return this.password;
  }
  getphoneNumber() {
    return this.phoneNumber;
  }
  getaddress() {
    return this.address;
  }
  getcontry() {
    return this.contry;
  }
  getgender() {
    return this.gender;
  }
  getqualification() {
    return this.qualification;
  }
}
module.exports = Registation;
