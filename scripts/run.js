const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("Waveportal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("deployed at ", waveContract.address);

  await waveContract.getnoofwaves();

  const wavetxn = await waveContract.wave();
  await wavetxn.wait();

  await waveContract.getnoofwaves();

  const secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();

  await waveContract.getnoofwaves();
};

const runmain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
runmain();
