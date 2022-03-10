import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  useClipboard
} from "@chakra-ui/react";
import { ellipsisString } from "../../utils";

type MenuContainerProps = {
  address: string;
  disconnect: () => void;
};

export const MenuContainer = ({ address, disconnect }: MenuContainerProps) => {
  const { hasCopied, onCopy } = useClipboard(address);
  console.log(hasCopied);

  return (
    <Menu>
      <MenuButton
        as={Avatar}
        aria-label="Options"
        icon={<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />}
        outline="none"
      />

      <MenuList>
        <MenuItem onClick={onCopy}>{ellipsisString(address)}</MenuItem>
        <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
        <MenuItem>Dark Mode</MenuItem>
      </MenuList>
    </Menu>
  );
};
