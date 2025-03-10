import { Card, Paper, styled, Typography } from "@mui/material"
import Box from "@mui/system/Box"

import { ReactComponent as LockIcon } from "src/assets/images/lock.svg"
import { ReactComponent as ValueIcon } from "src/assets/images/assets.svg"
import { NavButtons } from "src/components/helpers/NavButtons"
import { useDarkMode } from "src/hooks/useDarkMode"

type Props = {
  handleBack: () => void
  handleNext: () => void
}

const InfoCard = styled(Card)<{ darkMode: boolean }>(({ darkMode, theme }) => ({
  backgroundColor: darkMode
    ? theme.palette.background.paper
    : theme.palette.safeGreen.light,
  border: `${theme.palette.primary.main} 1px solid`,
  borderRadius: "8px",
  padding: "24px",
  minWidth: "220px",
}))

const SafeInfo = ({ handleNext, handleBack }: Props) => {
  const isDarkMode = useDarkMode()
  return (
    <Paper elevation={0} sx={{ padding: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        marginBottom={3}
      >
        <Typography fontWeight={700} variant="h4">
          What is Safe?
        </Typography>
      </Box>
      <Typography mb={3}>
        Safe is critical infrastructure for Web3. It is a programmable account
        standard that enables secure management of digital assets, data and
        identity. <br />
        <br />
        With this token launch, Safe is now a community-driven ownership
        platform.
      </Typography>

      <Box display="flex" mb={4} gap={5}>
        <InfoCard elevation={0} darkMode={isDarkMode}>
          <Typography>Total Safes created</Typography>
          <Box
            display="inline-flex"
            gap={1}
            alignItems="center"
            margin="8px 0px"
          >
            <LockIcon />
            <Typography variant="h5" fontWeight={700}>
              167,414
            </Typography>
          </Box>
        </InfoCard>
        <InfoCard elevation={0} darkMode={isDarkMode}>
          <Typography>Total value protected</Typography>
          <Box
            display="inline-flex"
            gap={1}
            alignItems="center"
            margin="8px 0px"
          >
            <ValueIcon />
            <Typography variant="h5" fontWeight={700}>
              $41B
            </Typography>
          </Box>
        </InfoCard>
      </Box>

      <Typography variant="h5" fontWeight={700} mb={2}>
        Why are we launching a token?
      </Typography>
      <Typography>
        As critical Web3 infrastructure, Safe needs to be a{" "}
        <strong>community-owned, censorship resistant project</strong>, with a
        committed ecosystem stewarding its decisions. A governance token is
        needed to help coordinate this effort.
      </Typography>
      <NavButtons handleBack={handleBack} handleNext={handleNext} />
    </Paper>
  )
}

export default SafeInfo
