import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import KittyCoreABI from "../../contracts/KittyCoreABI.json";

const KittyReader = () => {
  const [contract, setContract] = useState<Contract>();
  const [{ data, error, loading }, getSigner] = useSigner();
  useEffect(() => {
    console.log(data);
    const contract = new ethers.Contract(
      `0x06012c8cf97BEaD5deAe237070F9587f8E7A266d`,
      KittyCoreABI,
      data
    );
    setContract(contract);
  }, [data]);
  console.log(contract);

  return <div> </div>;
};
export default KittyReader;
