import { test } from "vitest";
const { spec } = require("pactum");

test("Builder", async () => {
    await spec()
        .get("https://poetrydb.org/title/Ozymandias/lines.json")
        .expectStatus(123);
});

test("BDD", async () => {
    const _spec = spec();
    _spec.get("https://poetrydb.org/title/Ozymandias/lines.json");
    await _spec.toss();
    _spec.response().to.have.status(123);
});
