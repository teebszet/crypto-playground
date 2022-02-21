import { createContext, useContext } from 'react';

export const ErrorContext = createContext({
  errorMessage: '',
  setErrorMessage: (message: string) => {},
});
ErrorContext.displayName = 'ErrorContext';


export const useErrorContext = () => useContext(ErrorContext);
