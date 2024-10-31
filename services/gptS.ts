import "jsr:@std/dotenv/load";

const KEY = Deno.env.get("GPT_API_KEY");

export async function askGPT(prompt: string): Promise<string> {
    if(KEY === undefined) {
        throw new Error("Failed to reach external API");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to reach external API: ${response.statusText}`);
    }

    // Parse the response from the API
    const responseData = await response.json();

    // Access the message content and return it
    const content = responseData.choices[0]?.message?.content;
    if (!content) {
        throw new Error("Unexpected API response format: Content not found.");
    }

    return content;
}