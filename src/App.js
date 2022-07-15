import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { useState } from "react";
import { Overlay } from "react-overlays";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: window.screen.width < 1000 ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: false,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <div>
            <img
              className="header-left__icon"
              src={require("./assets/icon.png")}
            />
            <div className="header-left__logo">DIVER.</div>
          </div>
          <nav className="header-left__nav">
            <ul>
              <li>Marketplace</li>
              <li>Ranking</li>
              <li>Pickup</li>
            </ul>
          </nav>
          <div
            className={menuOpen ? "header-cross" : "header-hamburger"}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="header-right">
          <input placeholder="SEARCH" className="header-right__search" />
          <div className="header-right__sign">
            <img src={require("./assets/user.png")} alt="sign in" height={30} />
            <div>Sign In</div>
          </div>
          <img
            src={require("./assets/wallet_w.png")}
            alt="wallet"
            height={24}
            className="header-right__wallet"
          />
          <div className="header-right__lang">EN</div>
        </div>
        <div className={menuOpen ? "header-mb-menu" : "header-mb-menu--close"}>
          <nav className="header-mb-menu__nav">
            <ul>
              <li>Marketplace</li>
              <li>Ranking</li>
              <li>Pickup</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="hero-left">
            <div className="hero-left__text">
              <h1>Discover, collect, and sell extraordinary NFTs</h1>
              <div className="hero-left__video">Diver market video</div>
            </div>
            <div className="hero-left__buttons">
              <button className="hero-left__buttons__purple">EXPLORE</button>
              <button className="hero-left__buttons__black">CREATE</button>
            </div>
          </div>
          <div className="hero-right">
            <Slider {...settings}>
              {Array(6)
                .fill(" ")
                .map((n, i) => (
                  <div className="slider-card" key={i}>
                    <div className="slider-card__img">
                      <img src={require("./assets/slider-cover-1.png")} />
                    </div>
                    <div className="slider-card__bottom">
                      <div className="slider-card__avatar">
                        <img src={require("./assets/slider-avatar-1.png")} />
                      </div>
                      <div className="slider-card__author">
                        Peripheral illusion
                      </div>
                      <div className="slider-card__title">
                        World of Women Collabs
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className="trend section section--lighter">
          <div className="section-content">
            <div className="section-title">Trending NFTs</div>
            <div className="section-title-underline" />
          </div>
          <div className="trend-slider">
            <Slider
              {...settings}
              infinite={true}
              dots={false}
              slidesToShow={window.screen.width < 768 ? 1 : 3}
              autoplay={true}
            >
              {Array(6)
                .fill(" ")
                .map((n, i) => (
                  <div className="slider-card" key={i}>
                    <div className="slider-card__img">
                      <img src={require("./assets/slider-cover-1.png")} />
                    </div>
                    <div className="slider-card__bottom">
                      <div className="slider-card__avatar">
                        <img src={require("./assets/slider-avatar-1.png")} />
                      </div>
                      <div className="slider-card__author">
                        Peripheral illusion
                      </div>
                      <div className="slider-card__title">
                        World of Women Collabs
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <div className="section-title">Popular Categories</div>
            <div className="section-title-underline" />
            <div className="categories">
              {Array(8)
                .fill("")
                .map((n, i) => (
                  <div className="category-card">
                    <img
                      className="category-card__img"
                      src={require("./assets/category1.png")}
                    />
                    <div className="category-card__name">Category {i + 1}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="ranking section">
          <div className="section-content">
            <div className="section-title">
              Top Collections <span className="highlight">7 Days</span>
            </div>
            <div className="section-title-underline" />
            <div className="ranking-cards">
              {Array(9)
                .fill("")
                .map((n, i) => (
                  <div className="ranking-card" key={i}>
                    <div className="ranking-card__num">{i + 1}</div>
                    <div className="ranking-card__avatar"></div>
                    <div className="ranking-card__info">
                      <div>
                        <div className="ranking-card__name">
                          Collection Name
                        </div>
                        <div className="ranking-card__price">Price</div>
                      </div>
                      <div className="ranking-card__profit">
                        <div className="positive">+100.5%</div>
                        <div>Amount</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="intro-video">
            <div className="intro-video__btn">
              <img src={require("./assets/triangle-right.png")} width={30} />
            </div>
          </div>
          <div className="intro-text">
            <div className="intro-text__title">What is a Diver marekt?</div>
            <div className="intro-text__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
        <div className="market">
          <div className="market-title">DIVER MARKET</div>
          <div className="market-container">
            <div className="market-services">
              {[
                "dex",
                "wallet",
                "mail",
                "marketplace",
                "domain",
                "blockchain",
              ].map((s) => (
                <div className="market-service">
                  <img
                    key={s}
                    className="market-service__icon"
                    src={require(`./assets/${s}.png`)}
                  />
                  <div className="market-service__name">{s}</div>
                </div>
              ))}
            </div>
            <div className="market-types">
              {["HERITAGE", "VINTAGE", "MOMENT"].map((t) => (
                <div key={t} className="market-type">
                  <div className="market-type__name">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={require("./assets/deco.png")} className="market-deco" />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-border" />
        <div className="footer-container">
          <div className="footer-logo">
            <img src={require("./assets/icon.png")} />
            <div>DIVER.</div>
          </div>
          <div className="footer-list">
            {[
              "What is an NFT?",
              "Create an NFT With Us",
              "About As",
              "Advisory Services",
              "Get Help",
              "Term of Use",
              "Privacy Policy",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <div>
            <img
              className="footer-social-media"
              src={require("./assets/twitter.png")}
              height="30"
            />
            <img
              className="footer-social-media"
              src={require("./assets/telegram.png")}
              height="30"
            />
            <img
              className="footer-social-media"
              src={require("./assets/instagram.png")}
              height="30"
            />
          </div>
        </div>
        <div className="footer-copyright">©Diver. All rights reserved.</div>
      </footer>
      {/* <Overlay
        show={menuOpen}
        rootClose
        offset={[0, 10]}
        onHide={() => setMenuOpen(false)}
        // placement={placement}
        // container={containerRef}
        // target={triggerRef}
      >
        {(props) => (
          <div className="mb-menu">
            <nav className="mb-menu__nav">
              <ul>
                <li>Marketplace</li>
                <li>Ranking</li>
                <li>Pickup</li>
              </ul>
            </nav>
          </div>
        )}
      </Overlay> */}
    </div>
  );
}

export default App;
