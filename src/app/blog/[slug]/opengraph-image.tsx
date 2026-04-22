import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/postsHandler";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? "Blog Post";
  const description = post?.description
    ? post.description.length > 120
      ? post.description.slice(0, 120) + "…"
      : post.description
    : "";
  const tags: string[] = post?.tags?.slice(0, 3) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B1120",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "72px",
            height: "4px",
            backgroundColor: "#8285ff",
            marginBottom: "44px",
            display: "flex",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "44px" : "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            maxWidth: "960px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: "22px",
              color: "#9CA3AF",
              lineHeight: 1.5,
              maxWidth: "960px",
              marginBottom: "48px",
              display: "flex",
            }}
          >
            {description}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#8285ff",
              fontWeight: 600,
              display: "flex",
            }}
          >
            jorgearaya.com
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(130, 133, 255, 0.15)",
                  color: "#8285ff",
                  padding: "6px 16px",
                  borderRadius: "6px",
                  fontSize: "18px",
                  border: "1px solid rgba(130, 133, 255, 0.3)",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
