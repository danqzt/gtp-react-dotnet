import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

// A custom theme for this app
const customTheme = createTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131'
        },
        '&$warning': {
          color: '#db3131'
        },
      }
    }
  },
  colorMenu:'#fff',
  palette: {
    gray: {
        main: grey[200],
    }
  },
});

export default customTheme;