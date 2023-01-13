import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const vote = await sdk.getContract(
      "0x3aeA49267f298Ed12BB9AfC260D8Ffa0fDE8cA6d",
      "vote"
    );
    const token = await sdk.getContract(
      "0xe21c8Af221226506E9eCf7DD3DAB82f3D14B5466",
      "token"
    );
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    const vote = await sdk.getContract(
      "0x3aeA49267f298Ed12BB9AfC260D8Ffa0fDE8cA6d",
      "vote"
    );
    const token = await sdk.getContract(
      "0xe21c8Af221226506E9eCf7DD3DAB82f3D14B5466",
      "token"
    );
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent98 = (Number(ownedAmount) / 100) * 98;

    await token.transfer(vote.getAddress(), percent98);

    console.log(
      "✅ Successfully transferred " + percent98 + " tokens to vote contract"
    );
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();
