import { assertEquals } from "@std/assert";
import { askGPT } from "./services/gptS.ts";

Deno.test("askGPT should return a string", async () => {
    const result = await askGPT("Hello, GPT!");
    assertEquals(typeof result, "string");
});

Deno.test("Test if API is working", async () => {
    const result = await askGPT("Hello, GPT!");
    assertEquals(typeof result, "string");
});
