import News from "../data/news.json";
import "../styles/contents.css";
import NewsContent from "./NewsContent";

function Contents() {
  const news = News.articles;
  return (
    <>
      <div className="content-main">
        <h2 className="is-size-2 has-text-black mt-2 mb-2 has-text-centered has-text-weight-bold">
          Welcome to DexsNews
        </h2>
        <div className="content-head">
          <div className="content-head-leftSide">
            <div className="text leftSide">
              <h4>{news[14].title}</h4>
              <p>
                <a href={news[14].url} target="blanked">
                  {news[14].content}
                </a>
              </p>
            </div>
          </div>

          <div className="content-head-rightSide">
            <div className="top">
              <div className="text rightSide">
                <h4>{news[1].title}</h4>
                <a href={news[1].url} target="blanked">
                  <p>{news[1].description}</p>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-left">
                <div className="text bottom-left">
                  <h4>{news[2].title}</h4>
                </div>
              </div>
              <div className="bottom-right">
                <div className="text bottom-right">
                  <h4>{news[3].title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsContent />
      </div>
    </>
  );
}

export default Contents;
