import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

export function Field({ label, invalid, errorText, children }) {
  return (
    <FormControl isInvalid={invalid}>
      <FormLabel>{label}</FormLabel>
      {children}
      {invalid && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </FormControl>
  );
}
