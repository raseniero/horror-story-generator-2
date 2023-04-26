import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const systemInput = "Write a story SIMILAR to SYSTEM. writing style should be straightforward and concise. It should give the information in a clear and direct manner, without using overly descriptive language or complex sentence structures. The sentences are relatively short and simple, making it easy for the reader to understand the situation being described. This style is commonly used in journalistic writing, where clarity and brevity are essential. In first person. story should be extremely long with lots of detail for every part of the story."

  const payload: OpenAIStreamPayload = {
    model: "gpt-4",
    messages: [
      { role: "system", content: systemInput },
      { role: "user", content: prompt },
    ],
    temperature: 0.6,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default handler;
