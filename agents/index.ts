import { client } from "./mcp/client";
import { getCachedRules } from "./cache";

async function runAgent() {
  const rules = await getCachedRules();

  const response = await client.responses.create({
    cachedContent: rules.name,
    contents: [
      {
        role: "user",
        parts: [{ text: "Generate the Android onboarding UI." }]
      }
    ]
  });

  console.log(response);
}

runAgent();
