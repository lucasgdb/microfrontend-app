import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-react-ts";

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "my-app",
    projectName: "home",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react", "react-dom"],
  });
};
