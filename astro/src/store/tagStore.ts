import { atom, map, action } from "nanostores";
import { getTagsService } from "../services/get-tags";

export const tags = map<string[]>([]);
export const tag = atom<string>('');

export const getTags = action(tags, "getTags", async (store) => {
  const newTags = await getTagsService();
  if (newTags) {
    store.set(newTags);
  }
});
