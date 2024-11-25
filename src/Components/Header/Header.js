import React from "react";
import "./Header.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import logoImg from "../../Image/sk-hostel-logo.png";
import { StateContext } from "../../Context";

export function Header() {
  const { routeChange } = React.useContext(StateContext);
  const headerData = {
    logo: { logoSrc: logoImg, logoAlt: "SK Hostel" },
    subNavigation: [
      { icon: "mobile", text: "", link: "tel:919884411137", target: "_self" },
      {
        icon: "whatsapp",
        text: "",
        link: "https://web.whatsapp.com/send?phone=919884411137",
        target: "_blank",
      },
    ],
    navigation: [
      { text: "HOME", link: "#top", target: "_self" },
      { text: "US", link: "#about-us", target: "_self" },
      { text: "AMENITIES", link: "#amenities", target: "_self" },
      { text: "ROOMS", link: "#rooms", target: "_self" },
      { text: "GALLERY", link: "#gallery", target: "_self" },
      { text: "CONTACT", link: "#contact-us", target: "_self" },
    ],
  };
  let { logo, subNavigation, navigation } = headerData;
  return (
    <ErrorBoundary>
      {headerData && headerData !== undefined ? (
        <header>
          <div className="logo-container">
            {logo && logo !== undefined && (
              <img
                className="logo"
                id="top"
                src={logo.logoSrc}
                alt={logo.logoAlt}
              />
            )}
          </div>
          <nav className="custom-container">
            <div className="sub-nav">
              {subNavigation &&
                subNavigation !== undefined &&
                subNavigation.map(({ icon, text, link, target }) => (
                  <button
                    className="sub-nav-item redirect"
                    key={icon + link}
                    onClick={() => routeChange(link, target)}
                  >
                    {icon === "whatsapp" ? (
                      <i className="fa fa-whatsapp"></i>
                    ) : icon === "mobile" ? (
                      <i className="fa-solid fa-phone"></i>
                    ) : (
                      ""
                    )}
                    {text}
                  </button>
                ))}
            </div>
            <div className="main-nav">
              <div className="main-nav-col">
                {navigation && navigation !== undefined
                  ? navigation.map(({ text, link, target }, index) => {
                      if (index < navigation.length / 2) {
                        return (
                          <button
                            className="main-nav-item redirect trochut-bold"
                            onClick={() => routeChange(link, target)}
                            key={link + index}
                          >
                            {text}
                          </button>
                        );
                      }
                    })
                  : ""}
              </div>
              <div className="main-nav-col">
                {navigation && navigation !== undefined
                  ? navigation.map(({ text, link, target }, index) => {
                      if (index >= navigation.length / 2) {
                        return (
                          <button
                            className="main-nav-item redirect trochut-bold"
                            onClick={() => routeChange(link, target)}
                            key={link + index}
                          >
                            {text}
                          </button>
                        );
                      }
                    })
                  : ""}
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <h1>No header data available</h1>
      )}
    </ErrorBoundary>
  );
}
