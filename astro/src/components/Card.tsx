type Props = {
  title: string;
  body: string;
  href: string;
};
export const Card = ({ href, title, body }: Props) => {
  return (
    <li>
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
        <p>this is a testing text</p>
      </a>
    </li>
  );
}
