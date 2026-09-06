import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { contactMethods } from "@/lib/site";

export const alt = "Hammad — Full Stack Developer & Automation Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1b1b19";
const PAPER = "#f5f5f1";

/** The display face is optional: a missing font must not fail the build. */
async function loadAnton(): Promise<ArrayBuffer | undefined> {
  try {
    const file = await readFile(join(process.cwd(), "fonts", "anton.ttf"));
    return Uint8Array.from(file).buffer;
  } catch {
    return undefined;
  }
}

export default async function OpengraphImage() {
  const anton = await loadAnton();
  const display = anton
    ? "Anton, sans-serif"
    : "'Arial Narrow', Impact, sans-serif";
  const email = contactMethods.find((method) => method.id === "email")?.value;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: PAPER,
        color: INK,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: display, fontSize: 46, letterSpacing: -2 }}>
          Hammad
        </span>
        <span style={{ fontFamily: display, fontSize: 46, color: "#ed4b7b" }}>
          .
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: display,
            fontSize: 128,
            lineHeight: 1.02,
            letterSpacing: -4,
          }}
        >
          FULL STACK DEV
        </span>
        <span
          style={{
            fontFamily: display,
            fontSize: 128,
            lineHeight: 1.02,
            letterSpacing: -4,
            color: "transparent",
            // Satori has no text-stroke, so the outlined line is toned instead.
            opacity: 0.34,
          }}
        >
          <span style={{ color: INK }}>&amp; AUTOMATION EXPERT</span>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: 26,
          borderTop: `1px solid #cecec7`,
          fontSize: 22,
          letterSpacing: 2,
          color: "#5f5f5a",
        }}
      >
        <span>FULL STACK DEVELOPER &amp; AUTOMATION EXPERT</span>
        {email ? <span>{email}</span> : null}
      </div>
    </div>,
    {
      ...size,
      ...(anton
        ? {
            fonts: [
              { name: "Anton", data: anton, style: "normal", weight: 400 },
            ],
          }
        : {}),
    },
  );
}
