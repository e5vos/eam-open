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
      <strong style={{ marginLeft: "10px" }}>MűhelyDokumentáció™</strong>
    </>
  ),
  logoLink: "/",
  docsRepositoryBase:
    "https://github.com/barnagoz/eam-front/tree/main/doku/pages",
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
  banner: {
    dismissible: true,
    text: <p>Az oldal jelenleg még fejlesztés alatt áll.</p>,
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
          color: "#666",
          flexWrap: "wrap",
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
