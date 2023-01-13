import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0xf753170f985D766Cc8e5d5fbD43Dc4c8C4Ef4074",
      "edition-drop"
    );

    const claimConditions = [
      {
        startTime: new Date(),
        maxClaimable: 50_000,
        price: 0,
        maxClaimablePerWallet: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
