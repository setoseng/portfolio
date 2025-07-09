import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Setya Seng - Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0551FA 0%, #3B82F6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              backgroundColor: "#FAAE05",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            &lt;/&gt;
          </div>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            margin: "0 0 20px 0",
            textAlign: "center",
            lineHeight: "1.1",
          }}
        >
          Setya Seng
        </h1>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            margin: "0 0 30px 0",
            textAlign: "center",
            color: "#FAAE05",
          }}
        >
          Senior Software Engineer
        </h2>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "400",
            margin: "0",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.4",
          }}
        >
          Full-Stack Developer specializing in React, Node.js, and modern web
          technologies
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
