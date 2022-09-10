import { describe, expect, test } from "vitest";
import { convert } from "./get-article";

describe("convert", () => {
  test("全てundefinedの場合", () => {
    const shouldBeEmptyObj = convert({});
    expect(shouldBeEmptyObj).toStrictEqual({});
  });

  test("一部がundefinedの場合", () => {
    const result = convert({
      tag: undefined,
      limit: 20,
      offset: 0,
    });

    expect(result).toStrictEqual({ limit: 20, offset: 0 });
  });
});
