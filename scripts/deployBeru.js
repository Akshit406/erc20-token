const hre = require("hardhat");

async function main() {
  const Beru = await hre.ethers.getContractFactory("Beru");
  const beru = await Beru.deploy();
  await beru.waitForDeployment();

  console.log("✅ Beru deployed to:", await beru.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
