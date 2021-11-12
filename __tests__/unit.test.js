// unit.test.js

const { test, expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// Phone Number

test("Phone# with/out punctuations", () => expect(functions.isPhoneNumber('123-456-7890')).toBe(true));

test("Phone# with punctuations", () => expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true));

test("Phone# wrong length", () => expect(functions.isPhoneNumber('555-555-555')).toBe(false));

test("Phone# with letters", () => expect(functions.isPhoneNumber('1-800-ATTORNEY')).toBe(false));


// Email

test("Email: generic", () => expect(functions.isEmail('biden@whitehouse.gov')).toBe(true));

test("Email: special char", () => expect(functions.isEmail('biden9joe@whitehouse.gov')).toBe(true));

test("Email: double @", () => expect(functions.isEmail('biden@home@whitehouse.gov')).toBe(false));

test("Email: wrong domain", () => expect(functions.isEmail('biden@whitehouse')).toBe(false));

// isStrongPassword

test("Password: long", () => expect(functions.isStrongPassword('aBBSD1231_asdef')).toBe(true));

test("Password: normal", () => expect(functions.isStrongPassword('aBBS231asd')).toBe(true));

test("Password: too long", () => expect(functions.isStrongPassword('aBBSD1231231_asdaBBSD1231231_asd')).toBe(false));

test("Password: not begin with letter", () => expect(functions.isStrongPassword('1abcasdjlkjalsdk')).toBe(false));

// isDate

test("Date: normal", () => expect(functions.isDate('7/29/1969')).toBe(true));

test("Date: double month", () => expect(functions.isDate('02/31/1999')).toBe(true));

test("Date: letter", () => expect(functions.isDate('02/x1/1999')).toBe(false));

test("Date: 2 digit year", () => expect(functions.isDate('02/31/99')).toBe(false));

// isHexColor

test("HexColor: 3", () => expect(functions.isHexColor('FFF')).toBe(true));

test("HexColor: 6", () => expect(functions.isHexColor('FFFFFF')).toBe(true));

test("HexColor: X", () => expect(functions.isHexColor('AFX')).toBe(false));

test("HexColor: too long", () => expect(functions.isHexColor('FFFFFFF')).toBe(false));