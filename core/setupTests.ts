import { vi } from 'vitest';

const mockDate = (dateString: string) => {
  const mockedDate = new Date(dateString);
  vi.useFakeTimers();
  vi.setSystemTime(mockedDate);
};

// Example utility function to restore real Date
const restoreDate = () => {
  vi.useRealTimers();
};
