import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Image metadata
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="flex relative flex-col p-12 w-full h-full items-start text-white"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #4a148c 100%)" }}
      >
        <div tw="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path
              d="M800 192L160 424.672 567.328 832 800 192z m-107.008 107.008l-151.488 416.672-107.008-106.976 161.888-213.088-213.088 161.888-106.976-107.008 416.672-151.488z"
              fill="#ffffff"
              fill-opacity=".95"
              p-id="4045"
            ></path>
          </svg>
          <p tw="ml-3 font-bold text-2xl tracking-wider">{siteConfig.name}</p>
        </div>
        <div tw="flex flex-col flex-1 py-16 w-full">
          <div tw="flex text-xl uppercase font-bold tracking-[0.2em] text-purple-200 mb-4">Personal Blog</div>
          <div
            tw="flex text-[90px] font-black "
          >
            {siteConfig.description}
          </div>
        </div>
        <div tw="flex items-center w-full justify-between bg-black/20 backdrop-blur-md rounded-xl p-4">
          <div tw="flex text-xl font-medium">{siteConfig.url}</div>
          <div tw="flex items-center text-xl">
            <div tw="flex ml-2 font-medium">{siteConfig.links.github}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
