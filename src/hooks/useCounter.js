import { useCallback, useState } from 'react';

export function useCounter() {
  const [currentValue, setCurrentValue] = useState(0);
  const incrementCurrentValue = useCallback(
    () => setCurrentValue((currentValue) => currentValue + 1),
    []
  );
  return [currentValue, incrementCurrentValue];
}
