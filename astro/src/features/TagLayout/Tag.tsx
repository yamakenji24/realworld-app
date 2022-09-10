type Props = {
  tag: string;
  handleTagOnClick: () => void;
};

export const Tag = (props: Props) => {
  const { tag, handleTagOnClick } = props;

  return (
    <button onClick={handleTagOnClick} className="tag-pill tag-default">
      {tag}
    </button>
  );
};
