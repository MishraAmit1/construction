import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { filename } = params;

    console.log("=== API ROUTE CALLED ===");
    console.log("Requested filename:", filename);

    // Security check
    if (!filename || filename.includes("..") || filename.includes("/")) {
      console.log("Invalid filename detected");
      return new NextResponse("Invalid filename", { status: 400 });
    }

    // Download from Supabase Storage
    console.log("Downloading from Supabase storage: uploads/" + filename);
    const { data, error } = await supabase.storage
      .from("project-images")
      .download(`blogs/${filename}`);

    if (error) {
      console.error("Supabase storage error:", error);
      return new NextResponse("Image not found", { status: 404 });
    }

    console.log("File downloaded successfully, size:", data.size);

    // Convert to buffer
    const arrayBuffer = await data.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Get content type
    const contentType = getContentType(filename);
    console.log("Content type:", contentType);

    // Return image
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("API route error:", error);
    return new NextResponse("Server error: " + error.message, { status: 500 });
  }
}

function getContentType(filename) {
  const ext = filename.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "webp":
      return "image/webp";
    default:
      return "image/jpeg";
  }
}
