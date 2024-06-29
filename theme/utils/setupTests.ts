import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom/matchers';

const mockDate = (dateString: string) => {
  const mockedDate = new Date(dateString);
  vi.useFakeTimers();
  vi.setSystemTime(mockedDate);
};

// Example utility function to restore real Date
const restoreDate = () => {
  vi.useRealTimers();
};
