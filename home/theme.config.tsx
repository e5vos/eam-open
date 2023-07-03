import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/site.webmanifest?v=1" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#ff7900" />
      <link rel="shortcut icon" href="/favicon.ico?v=1" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  logo: (
    <>
      <Image width={50} height={50} alt="EAM Logo" src={"/logo.png"} />
      <br />
      <strong style={{ marginLeft: "10px" }}>Eötvös Alkotó Műhely</strong>
    </>
  ),
  logoLink: "/",
  docsRepositoryBase:
    "https://github.com/barnagoz/eam-open/tree/main/home/pages",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – EAM",
    };
  },
  darkMode: true,
  primaryHue: 40,
  search: {
    emptyResult: (
      <p className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        Hmm... Úgy tűnik nincs ilyen információ.
      </p>
    ),
    loading: "Betöltés...",
    placeholder: "Keresés az oldalon...",
  },
  editLink: {
    text: "Oldal szerkesztése",
  },
  navigation: false,
  toc: {
    title: "Tartalomjegyzék",
  },
  feedback: {
    content: "Visszajelzésed van? Írj nekünk!",
  },
  footer: {
    component: (
      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          fontSize: "0.8rem",
          justifyContent: "space-between",
          color: "#666",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          <p>
            {new Date().getFullYear()} ©{" "}
            <a href="https://e5vosalkoto.eu" target="_blank">
              Eötvös Alkotó Műhely
            </a>
            .
          </p>
          <p>‎</p>
          <p>
            <a href="https://konzol.e5vosalkoto.eu" target="_blank">
              MűhelyKonzol™
            </a>
          </p>
          <p>
            <a href="https://doku.e5vosalkoto.eu" target="_blank">
              MűhelyDokumentáció™
            </a>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>
            <a href="/tamogatok" target="_blank">
              Támogatók
            </a>
          </p>
        </div>
      </div>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Világos",
        dark: "Sötét",
        system: "Rendszer",
      };
    },
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    return (
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        Utoljára frissítve: {timestamp.toLocaleString("hu-HU")}
      </p>
    );
  },
};

export default config;
