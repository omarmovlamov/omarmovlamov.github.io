import "../styles/newsContent.css";
import { AiFillCaretDown } from "react-icons/ai";
import News from "../data/news.json";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function NewsContent() {
  const news = News.articles;
  return (
    <>
      <div className="content-foot">
        <div className="foot-leftSide">
          <div className="foot-leftSide-nav">
            <div className="news-title">
              <p>DON'T MISS</p>
            </div>
            <div className="news-a-rightSide">
              <a href="/">All</a>
              <a href="#">Sport</a>
              <a href="#" id="remove">
                Healty & Fitness
              </a>
              <a href="#">
                More
                <span>
                  <AiFillCaretDown />
                </span>
              </a>
            </div>
          </div>
          <div className="content-left-right">
            <div className="foot-leftContent">
              <div>
                <img
                  id="leftSide-img"
                  src={news[7].urlToImage}
                  alt={news[7].title}
                />
                <div className="foot-text">
                  <a href={news[7].url} target="blanked">
                    <p className="has-text-weight-medium mt-2 is-size-4">
                      {news[7].title}
                    </p>
                  </a>
                  <p className="has-text-weight-bold is-inline">
                    {news[7].source.name}
                  </p>
                  <p className="has-text-weight-light is-inline ml-3 ">
                    {news[7].publishedAt}
                  </p>

                  <p className="has-text-weight-light  has-text-weight-normal">
                    {news[7].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="foot-rightContent">
              {news.slice(8, 12).map((newsItem) => {
                return (
                  <div key={newsItem.source.name}>
                    <img
                      id="rightSide-img"
                      className="mb-5"
                      src={newsItem.urlToImage}
                      alt={newsItem.title}
                    />
                    <div className="ml-3">
                      <a href={newsItem.url} target="blanked">
                        <p className="has-text-weight-medium ">
                          {newsItem.title}
                        </p>
                      </a>
                      <p className="has-text-weight-light is-inline mt-2">
                        {newsItem.publishedAt}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="foot-rightSide">
          <div className="foot-rightSide-nav">
            <p>STAY CONNECTED</p>
          </div>
          <div className="socialMedia">
            <div className="instagram row">
              <AiFillInstagram className="mr-2" id="instagram" />
              <p className="is-size-5 has-text-weight-bold">58,568 Followers</p>
            </div>
            <div className="facebook row">
              <AiFillFacebook className="mr-2" id="facebook" />
              <p className="is-size-5 has-text-weight-bold">56,485 Fans</p>
            </div>
            <div className="youtube row">
              <AiFillYoutube className="mr-2" id="youtube" />
              <p className="is-size-5 has-text-weight-bold">
                23,000 Subscribers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsContent;
