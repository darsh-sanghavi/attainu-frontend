import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import { Routes } from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f" /* dark red color */,
      light: "#ffcdd2" /* light pink color */,
    },
    secondary: {
      main: "#6d9c90" /* turquoise color */,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
