let charSet = {
  a: 12,
  b: 14,
  c: 16,
  d: 19,
  e: 21,
  f: 23,
  g: 28,
  h: 30,
  i: 31,
  j: 33,
  k: 35,
  l: 38,
  m: 40,
  n: 42,
  o: 47,
  p: 49,
  q: 52,
  r: 56,
  s: 59,
  t: 65,
  u: 68,
  v: 70,
  w: 73,
  x: 79,
  y: 81,
  z: 88,
  A: 90,
  B: 93,
  C: 99,
  D: 103,
  E: 111,
  F: 130,
  G: 138,
  H: 141,
  I: 190,
  J: 200,
  K: 209,
  L: 220,
  M: 234,
  N: 244,
  O: 255,
  P: 269,
  Q: 270,
  R: 278,
  S: 280,
  T: 285,
  U: 290,
  V: 293,
  W: 295,
  X: 300,
  Y: 304,
  Z: 307,
  0: 310,
  1: 314,
  2: 319,
  3: 330,
  4: 340,
  5: 351,
  6: 370,
  7: 377,
  8: 390,
  9: 395,
  '!': 400,
  '@': 403,
  '#': 409,
  '$': 413,
  '%': 417,
  '^': 421,
  '&': 426,
  '*': 431,
  '(': 434,
  ')': 439,
  '_': 441,
  '~': 445,
  '`': 447,
  '-': 450,
  '+': 452,
  '=': 456,
  '{': 459,
  '}': 462,
  '[': 464,
  ']': 468,
  '|': 470,
  '\\': 473,
  ':': 474,
  ';': 478,
  '\'': 480,
  '\"': 483,
  '<': 485,
  '>': 488,
  ',': 492,
  '.': 495,
  '?': 497,
  '/': 500
};

function saveData() {
  if (document.getElementById("password").value == '' ||
    document.getElementById("username").value == '') {
    alert("Please enter valid details");
  }
  else {
    let password = document.getElementById("password").value.split('');
    let sum = 0;
    for (i = 0; i < password.length; i++) {
      let val = charSet[password[i]];
      console.log(val);
      sum += val;
    }
    console.log(sum)
    localStorage.setItem(document.getElementById("username").value, sum);
    alert("Sign up successful");
  }
}

function validateData() {
  if (document.getElementById("password").value == '' ||
    document.getElementById("username").value == '') {
    alert("Please enter valid details");
  }
  else {
    let password = document.getElementById("password").value.split('');
    let sum = 0;
    for (i = 0; i < password.length; i++) {
      let val = charSet[password[i]];
      console.log(val);
      sum += val;
    }
    console.log(sum)
    let actualSum = localStorage.getItem(document.getElementById("username").value);
    if (actualSum == sum) {
      alert("Sign In successful");
    }
    else if (actualSum == null) {
      alert("User doesn't exist");
    }
    else {
      alert("Wrong password");
    }
  }
}

function showPassword() {
  if (document.getElementById("password").type === "password") {
    document.getElementById("password").type = "text";
  } else {
    document.getElementById("password").type = "password";
  }
}