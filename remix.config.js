/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js",
  appDirectory: "app",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"]
};
