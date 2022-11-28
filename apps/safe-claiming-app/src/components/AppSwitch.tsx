import App from "src/App"
import { useLightDarkTheme } from "src/hooks/useDarkMode"
import { ThemeProvider } from "@mui/material"
import Widget from "src/widgets/Widget"

export const AppSwitch = () => {
  const theme = useLightDarkTheme()
  const widgetId = window.location.hash.split("+")[0]

  return (
    <ThemeProvider theme={theme}>
      {widgetId === "#widget" ? <Widget /> : <App />}
    </ThemeProvider>
  )
}
