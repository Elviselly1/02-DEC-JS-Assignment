// first assignment

//   A
function Calculate(Eng = 0, Math = 0, Phy = 0, Chem = 0, Bio = 0) {
  const sum = Eng + Math + Chem + Phy + Bio;
  if (sum >= 180) {
    console.log(
      "Congrats! You got an addmission into the University of Portharcourt."
    );
  } else if (sum < 180) {
    console.log("Please try again next year! Dumbass");
  }
}
Calculate(30, 30, 34, 30, 60);

// B
const Result = (Eng = 0, Math = 0, Phy = 0, Chem = 0, Bio = 0) => {
  const sum = Eng + Math + Chem + Phy + Bio;
  if (sum >= 180) {
    console.log("congrats! You are an new stundent in Uniport");
  } else if (sum < 180) {
    console.log("Fuck off Dumbass!");
  }
};

Result(10);

// Second assignment

const input = (password) => {
  if (password.length < 5) {
    console.log("Pasowrd not up to 6 character");
  } else if (!password.includes("$")) {
    console.log("Please input '$' sign");
  } else if (!password.includes("!")) {
    console.log("Password must contain '!' ");
  } else if (
    !password.length < 5 &&
    password.includes("$") &&
    password.includes("!")
  ) {
    console.log("Password Accepted");
  }
};
input("thanks$!");
