import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
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
          <Link href="https://e5vosalkoto.eu">Eötvös Alkotó Műhely</Link>.
        </p>
        <p>‎</p>
        <p>
          <Link href="https://konzol.e5vosalkoto.eu">MűhelyKonzol™</Link>
        </p>
        <p>
          <Link href="https://doku.e5vosalkoto.eu">MűhelyDokumentáció™</Link>
        </p>
        <p>
          <Link href="https://jelentkezes.e5vosalkoto.eu">
            MűhelyJelentkeztető™
          </Link>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>
          <Link href="https://e5vosalkoto.eu/tamogatok">Támogatók</Link>
        </p>
      </div>
    </div>
  );
}
