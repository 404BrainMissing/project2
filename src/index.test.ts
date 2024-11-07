import { describe, it, expect, test } from 'vitest';

test("check if running", async () => {
    const url = await fetch("https://404brainmissing.github.io/project2/contact");

    expect(url.status).toBe(200);
});