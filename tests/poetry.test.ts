import { test } from "vitest";
const { spec } = require("pactum");

test("Builder", async () => {
    await spec()
        .get("https://poetrydb.org/title/Ozymandias/lines.json")
        .expectStatus(123);
});

