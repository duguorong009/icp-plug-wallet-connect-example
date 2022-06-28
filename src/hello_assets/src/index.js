import { hello } from "../../declarations/hello";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loader = document.getElementById("loader");

  const button = e.target.querySelector("button");


  loader.style.visibility = "visible";
  button.setAttribute("disabled", true);

  // // Interact with foo actor, calling the greet method
  // const greeting = await hello.greet(name);

  try {
    const publicKey = await window.ic.plug.requestConnect();
    console.log(`The connected user's public key is:`, publicKey);

    // document.getElementById("principalId").innerText = publicKey;

    const result = await window.ic.plug.isConnected();
    document.getElementById("connectionStatus").innerText = `Connected: ${result}`;

    console.log(`Plug connection is ${result}`);
  } catch (e) {
    console.log(e);
  }

  loader.style.visibility = "hidden";
  button.removeAttribute("disabled");

  return false;
});
