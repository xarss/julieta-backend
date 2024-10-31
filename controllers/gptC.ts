import type { Context } from "@oak/oak";
import { askGPT } from "../services/gptS.ts";

export async function askGpt(context: Context) {
    const body = await context.request.body.json();
    if (!body.prompt) {
        throw new Error("Prompt is required");
    }

    context.response.body = { content: await askGPT(body.prompt) };
}
