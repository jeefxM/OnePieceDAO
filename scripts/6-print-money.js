import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const token = await sdk.getContract(
      "0xe21c8Af221226506E9eCf7DD3DAB82f3D14B5466",
      "token"
    );

    const amount = 1_000_000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$LUFFY in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
