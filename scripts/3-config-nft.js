import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0xf753170f985D766Cc8e5d5fbD43Dc4c8C4Ef4074",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "Straw Hat Pirates",
        description: "This NFT will give you access to OnePieceDAO!",
        image: readFileSync("scripts/assets/OnePiece.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
