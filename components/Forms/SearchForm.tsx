import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useState } from "react";
import { Contract, contract } from "ethers";
import useKittyContract from "../../Hooks/useKittyContract";

type SearchFormProps = {
  contract: Contract | undefined;
};

export const SearchForm = ({ contract }: SearchFormProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    //const response = await contract?.getKitty(4);
    //console.log(response);
    console.log(searchText);
  };

  //call getkitty as an await, await ontract.get kitty when it returns we will save that response to a variable
  //call a function and return

  const handleChange = async (e: any): Promise<void> => {
    e.preventDefault();

    setSearchText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormHelperText textAlign="center">Search a Kitty</FormHelperText>
        <FormLabel htmlFor="address"></FormLabel>
        <InputGroup size="md">
          <Input onChange={handleChange} value={searchText} />
          <InputRightElement width="4.5rem">
            <Button type="submit" h="1.75rem" size="sm">
              go
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};
