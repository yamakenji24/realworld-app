import { useStore } from "@nanostores/react";
import { useEffect, useCallback } from 'react';
import { getTags, tags, tag } from "../../store/tagStore";
import { Tag } from './Tag'

export const TagLayout = () => {
  const tagList = useStore(tags);
  useEffect(() => {
    getTags();
  }, [])

  const handleTagOnClick = useCallback((selectedTag: string) => () => {
    tag.set(selectedTag)
  }, []);

  if (!tagList.length) {
    return <div>Now Loading....</div>
  }

  return (
    <div className="tag-list">
      {tagList.map((tag) => (
        <Tag key={tag} tag={tag} handleTagOnClick={handleTagOnClick(tag)}/>
      ))}
    </div>
  );
};
