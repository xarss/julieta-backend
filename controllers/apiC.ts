import type { Context } from "@oak/oak";
import data from "../data.json" with { type: "json" };

export function getAll(context: Context) {
    context.response.body = data;
}

export function getApiStatus(context: Context) {
    context.response.body = "The API is running!";
}
