const hre = require("hardhat");

async function main() {
  const Igris = await hre.ethers.getContractFactory("Igris");
  const igris = await Igris.deploy();
  await igris.waitForDeployment();

  console.log("✅ Igris deployed to:", await igris.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
