import { phoneSendOtpHandler } from "@myorg/ui/dist/auth/phoneSendOtpHandler.js";
export async function POST(req,res) {
  try {
    const fakeRequest = {
      json: async () => req.body,
    };
    const result = await phoneSendOtpHandler(fakeRequest, {
      url: "https://oha.onehealthassist.com/api/", // trailing slash important
    });

    // `phoneSendOtpHandler` returns a Response object, so convert it to JSON:
    const jsonResult = await result.json();

    res.status(result.status).json(jsonResult);
  } catch (error) {
    console.error("❌ Error in phoneSendOtpHandler:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
