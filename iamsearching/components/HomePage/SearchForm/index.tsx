import { Button, FormControl, FormLabel, Input } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
const SearchForm = () => {
  const [startAddress, setStartAddress] = useState<string>("");
  const [endAddress, setEndAddress] = useState<string>("");
  const router = useRouter();

  const handleStartAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartAddress(e.target.value);
  };

  const handleEndAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndAddress(e.target.value);
  };

  const handleFormSubmit = () => {
    console.log(
      "no i super - adres początkowy: ",
      startAddress,
      " adres końcowy: ",
      endAddress
    );
    router.push("/map");
  };

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="start-address">Adres początkowy: </FormLabel>
        <Input
          name="start-address"
          onChange={handleStartAddressChange}
          value={startAddress}
          placeholder="np. Warszawa Złota 3"
        />
        <FormLabel htmlFor="end-address">Adres końcowy: </FormLabel>
        <Input
          name="end-address"
          onChange={handleEndAddressChange}
          value={endAddress}
          placeholder="np. Warszawa Złota 3"
        />
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleFormSubmit}
        >
          Wyznacz trasę
        </Button>
      </FormControl>
    </>
  );
};
export default SearchForm;
