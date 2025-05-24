module.exports = ({ env }) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
      autoprefixer: {
        grid: true,
      },
    }),
    env === "cssnano" &&
      require("cssnano")({
        preset: "default",
      }),
  ].filter(Boolean),
})
