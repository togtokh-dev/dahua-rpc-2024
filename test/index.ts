import { randomInt } from "crypto";
import { RPC, RPCLogin } from "../lib";
// const { RPC, RPCLogin } = require("dahua-rpc");

async function main() {
  const ip = "192.168.1.108";
  const username = "admin";
  const password = "loginUser1";

  const rpc = new RPC(ip);
  const rpcLogin = new RPCLogin(rpc);

  // Login
  await rpcLogin.login(username, password);
  console.log("-------asd");
  // Logout
  try {
    const asd = await rpc.RecordUpdater.instance("TrafficRedList");
    console.log(asd.result);
    const wad = await rpc.RecordUpdater.insert(
      {
        PlateNumber: "11251AA",
        MasterOfCar: "TOGTOKH222",
        CardID: "M",
        BeginTime: "2000-01-01 00:00:00",
        CancelTime: "2037-12-31 23:59:59",
        DepartMent: " ",
        TelephoneNumber: " ",
      },
      asd.result
    );
    console.log(wad);
  } catch (error) {
    console.log("error", error);
  }
}

main();
