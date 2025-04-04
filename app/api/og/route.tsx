import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start text-white"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #4a148c 100%)" }}
        >
          <div tw="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path
                d="M800 192L160 424.672 567.328 832 800 192z m-107.008 107.008l-151.488 416.672-107.008-106.976 161.888-213.088-213.088 161.888-106.976-107.008 416.672-151.488z"
                fill="#ffffff"
                fill-opacity=".95"
                p-id="4045"
              ></path>
            </svg>
            <p tw="ml-3 font-bold text-2xl tracking-wider">Jiaqi Blog</p>
          </div>
          <div tw="flex flex-col flex-1 py-16 w-full">
            <div tw="flex text-xl uppercase font-bold text-purple-200 mb-4">BLOG POST</div>
            <div tw="flex text-[90px] font-black">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between bg-black/20  rounded-xl p-4">
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
  } catch {
    return new Response("Failed to generate image", { status: 500 });
  }
}
