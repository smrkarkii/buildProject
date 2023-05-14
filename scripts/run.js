const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("Waveportal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("deployed at ", waveContract.address);
  let noOfWaves;

  await waveContract.getnoofwaves();

  const wavetxn = await waveContract.wave("Hello there");
  await wavetxn.wait();

  noOfWaves = await waveContract.getnoofwaves();
  console.log(noOfWaves);

  const secondWaveTxn = await waveContract
    .connect(randomPerson)
    .wave("I am a random person");
  await secondWaveTxn.wait();

  noOfWaves = await waveContract.getnoofwaves();
  console.log(noOfWaves);
  let allWaves = waveContract.connect(randomPerson).getWaves();

  console.log(allWaves);
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
