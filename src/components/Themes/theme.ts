import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#536259",
    },
    subtitle1: {
      fontSize: "13.89px",
      fontWeight: 600,
      color: "#536259",
    },
    body1: {
      fontSize: "13.13px",
      fontWeight: 500,
      color: "#536259",
    },
    h6: {
      fontSize: "13.13px",
      fontWeight: 600,
      color: "#2D3631",
    },
    h5: {
      fontSize: "14.88px",
      fontWeight: 600,
      color: "#2D3631",
    },
    h4: {
      fontSize: "17.85px",
      fontWeight: 600,
      color: "#2D3631",
    },
    h3: {
      fontSize: "21.42px",
      fontWeight: 600,
      color: "#2D3631",
    },
    h2: {
      fontSize: "25.71px",
      fontWeight: 600,
      color: "#2D3631",
    },
    h1: {
      fontSize: "30.86px",
      fontWeight: 600,
      color: "#2D3631",
    },
    caption: {
      fontSize: "11.44px",
      color: "#6A7670",
    },
  },
  palette: {
    primary: {
      main: "#09AA59",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: 0,
          height: 0,
          borderRadius: 0,
          backgroundColor: "white",
        }),
        checked: ({ theme }) => ({
          color: "#ff0000",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "1rem",
          height: "fit-content",
        },
      },
    },
  },
});

export default theme;
