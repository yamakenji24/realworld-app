type Props = {
  author: string;
  date: string;
  likes: number;
  title: string;
  description: string;
};
function ArticlePreview({ author, date, likes, title, description }: Props) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
        </a>
        <div className="info">
          <a href="" className="author">
            {author}
          </a>
          <span className="date">{date}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
          <i className="ion-heart" />
          {likes}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}

export default function Index() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <ArticlePreview
              author="Eric Simons"
              date="January 20th"
              likes={29}
              title="How to build webapps that scale"
              description="This is the description for the post."
            />

            <ArticlePreview
              author="Albert Pai"
              date="January 20th"
              likes={32}
              title="The song you wont ever stop singing. No matter how hard you try."
              description="This is the description for the post."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
