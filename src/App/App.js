import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import PageHeader from "../components/PageHeader";
import Employee from "../Pages/Employee/Employee";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324546",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Employee />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
