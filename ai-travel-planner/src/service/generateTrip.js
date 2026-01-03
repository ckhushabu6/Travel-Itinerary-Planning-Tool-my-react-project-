export async function generateTrip(tripData) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `
You are a professional travel planner.

Create a detailed travel itinerary using the following details:

Destination: ${tripData.destination.properties.formatted}
Trip Duration: ${tripData.days} days
Budget: ${tripData.budget.title}
Travelers: ${tripData.travelers.title}

Requirements:
- Day-wise plan
- Activities, food suggestions, and tips
- Keep it realistic and budget-aware

Respond strictly in valid JSON format only.
`;

  const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Hello Gemini, create a short travel plan for Goa.",
            },
          ],
        },
      ],
    }),
  }
);


  const data = await res.json();

  if (!data.candidates || !data.candidates.length) {
    throw new Error("No response from Gemini");
  }

  const text = data.candidates[0].content.parts[0].text;

  return JSON.parse(text);
}
