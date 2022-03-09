import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import KittyCoreABI from "../contracts/KittyCoreABI.json";

const useKittyContract = () => {
  const [contract, setContract] = useState<Contract>();
  useEffect(() => {
    const contract = new ethers.Contract(
      `0x06012c8cf97BEaD5deAe237070F9587f8E7A266d`,
      KittyCoreABI
    );
    setContract(contract);
  }, []);
  console.log(contract);

  return { kittyContract: contract };
};
export default useKittyContract;
