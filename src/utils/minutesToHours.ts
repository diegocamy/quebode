export const minutesToHours = (minutes: number): string => {
  const remainingMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);

  return `${hours}h ${remainingMinutes}m`;
};
