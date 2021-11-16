console.log("nurjani");
interface IAccount {
  username: string;
  password: string;
}
interface IIdentity {
  fName: string;
  mName: string;
  lName: string;
}
interface IWork {
  company: string;
  position: string;
}
interface IUser {
  credentials: {
    account: IAccount;
    identity: IIdentity;
    work: IWork;
  };
}

const myObj: IUser[] = [
  {
    credentials: {
      account: { username: "nurjani", password: "nurjani" },
      identity: { fName: "Nurjadein", mName: "Tominaman", lName: "Abdulmorid" },
      work: { company: "ITSMarawi", position: "Developer" },
    },
  },
  {
    credentials: {
      account: { username: "nurjani", password: "nurjani" },
      identity: { fName: "Nurjadein", mName: "Tominaman", lName: "Abdulmorid" },
      work: { company: "ITSMarawi", position: "Developer" },
    },
  },
  {
    credentials: {
      account: { username: "nurjani", password: "nurjani" },
      identity: { fName: "Nurjadein", mName: "Tominaman", lName: "Abdulmorid" },
      work: { company: "ITSMarawi", position: "Developer" },
    },
  },
  {
    credentials: {
      account: { username: "nurjani", password: "nurjani" },
      identity: { fName: "Nurjadein", mName: "Tominaman", lName: "Abdulmorid" },
      work: { company: "ITSMarawi", position: "Developer" },
    },
  },
];
