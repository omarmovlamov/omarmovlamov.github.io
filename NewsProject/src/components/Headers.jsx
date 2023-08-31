import { BiNews } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import "../styles/headers.css";
function Headers() {
  return (
    <>
      <div className="Head">
        <header className="header-main">
          <div className="title">
            <BiNews style={{ marginRight: 20 }} />
            <h1 className="is-size-4 has-text-weight-bold">
              <a href="/">DexsNews</a>
            </h1>
          </div>
          <div className="header-rightSide has-text-weight-semibold">
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Company</a>
            <a href="#" id="more">
              Social
              <span>
                <AiFillCaretDown />
              </span>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Headers;
