import { useEffect } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { isClient } from "../../utils";
import ConnectWeb3 from "../Modals/ConnectWeb";
import { MenuContainer } from "./Menu";

const Connect = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [
    { data: accountData, error: accountError, loading: accountLoading },
    disconnect
  ] = useAccount({
    fetchEns: true
  });
  let [
    { data: signData, error: signError, loading: signLoading },
    signMessage
  ] = useSignMessage({
    message: "gm wagmi frens"
  });

  useEffect(() => {
    const promptForSignature = async () => {
      await signMessage();
    };

    if (signError) {
      disconnect();
    }
    if (!signError && connectData?.connected && !signData) {
      promptForSignature();
    }
  }, [connectData?.connected, signData, signError]);

  return (
    <>
      {isClient() && (
        <div>
          {connectData?.connected && signData && accountData ? (
            <MenuContainer
              address={accountData.address}
              disconnect={disconnect}
            />
          ) : (
            <ConnectWeb3
              connectors={connectData?.connectors}
              connect={connect}
              signData={signData}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Connect;
