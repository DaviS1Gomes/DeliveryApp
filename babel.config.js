module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Outros plugins podem vir aqui
      "react-native-reanimated/plugin", // O plugin Reanimated precisa ser o último
    ],
  };
};
