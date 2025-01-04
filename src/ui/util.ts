export const cleanString = (json: string | undefined): string => {
  return json ? JSON.stringify(json).replaceAll('"', "") : "";
};
