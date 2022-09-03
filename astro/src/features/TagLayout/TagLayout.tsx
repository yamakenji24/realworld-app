import { useStore } from "@nanostores/react";
import { useEffect } from 'react';
import { getTags, tags } from "../../store/tagStore";

export const TagLayout = () => {
  const tagList = useStore(tags);
  useEffect(() => {
    getTags();
  }, [])
  
  return (
    <div className="tag-list">
      {tagList.map((tag) => (
        <a key={tag} href="" className="tag-pill tag-default">
          {tag}
        </a>
      ))}
    </div>
  );
};
