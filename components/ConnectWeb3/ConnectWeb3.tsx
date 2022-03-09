import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import KittyCoreABI from "../../contracts/KittyCoreABI.json";

const KittyReader = () => {
  const [contract, setContract] = useState<Contract>();

  useEffect(() => {
    const network = "homestead";
    const provider = ethers.getDefaultProvider(network, {
      infura: ""
    });
    console.log(provider);
    const contract = new ethers.Contract(
      `0x06012c8cf97BEaD5deAe237070F9587f8E7A266d`,
      KittyCoreABI
    );
    setContract(contract);
  }, []);
  console.log(contract);

  return <div> </div>;
};
export default KittyReader;
