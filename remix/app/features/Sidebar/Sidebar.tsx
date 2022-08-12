import type { ReactElement } from 'react';

const tags = [
  'programming',
  'javascript',
  'emberjs',
  'angularjs',
  'react',
  'mean',
  'node',
  'rails',
] as const;

export function SideBar(): ReactElement {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {tags.map((tag) => (
            <a key={tag} href="" className="tag-pill tag-default">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
