import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  // Get the URL of the request
  const url = new URL(request.url);
  // Get the secret from the query parameter
  const secret = url.searchParams.get("secret");

  // Check if the secret matches your environment variable
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // const requestData = await request.json();
    // Default to revalidating the homepage if no specific path is provided
    // const pathToRevalidate = requestData.path || "/";
    revalidatePath('/', 'layout');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
