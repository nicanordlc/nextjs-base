import { ImageResponse } from "next/og";

export const runtime = "edge";

const squareSize = 32;
export const size = {
  width: squareSize,
  height: squareSize,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        ☀️
      </div>
    ),
    {
      ...size,
    },
  );
}
