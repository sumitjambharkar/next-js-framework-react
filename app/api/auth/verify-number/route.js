import { verifyNumberHandler } from "@myorg/ui/dist/auth/verifyNumberHandler.js";
export async function POST(req,res) {
  try {
     const fakeRequest = {
      json: async () => req.body,
      headers: {
        get: (headerName) => {
          return req.headers[headerName.toLowerCase()] || null;
        },
      },
    };

    const result = await verifyNumberHandler(fakeRequest, {
      node_url: "https://user-management.1healthassist.com/api/", // trailing slash important
    });

    // `verifyNumberHandler` returns a Response object, so convert it to JSON:
    const jsonResult = await result.json();

    res.status(result.status).json(jsonResult);
  } catch (error) {
    console.error("❌ Error in verifyNumberHandler:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
