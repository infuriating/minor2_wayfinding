export const RetrieveQuotes = async () => {
  const res = await fetch("https://type.fit/api/quotes");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
