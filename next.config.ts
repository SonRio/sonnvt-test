import { i18n } from "./i18n.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n,
  ns: ["en", "vi"],
  defaultNS: "en",
  devIndicators: {
    appIsrStatus: false,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
