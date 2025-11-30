const config = {
  app_name: "OneHealthAssist",
  url: import.meta.env.VITE_BACKEND_API,
  image_url: import.meta.env.VITE_ASSET_LINK,
  google_maps_key: import.meta.env.VITE_GOOGLE_MAP_KEY,
  baseUrl: import.meta.env.VITE_BASE_URL,
  node_url: import.meta.env.VITE_NODE_AUTH_API,
};

export default config;
