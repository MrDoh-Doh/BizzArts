import { client } from "./mcp/client";

export async function getCachedRules() {
  const cached = await client.cachedContents.create({
    displayName: "bizzarts-core-rules",
    contents: [
      {
        role: "system",
        parts: [
          { text: "These are the core rules for the BizzArts marketplace..." }
        ]
      }
    ]
  });

  return cached;
}
