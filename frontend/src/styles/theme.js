import { ThemeProvider } from "styled-components"

import GlobalStyles from "./globals"
import theme from "../themes/default"

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
