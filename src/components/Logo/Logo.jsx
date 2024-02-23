import { LocalShipping } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const Logo = () => (
  <Box>
    <Typography
      component="h1"
      sx={{
        alignItems: 'center',
        fontSize: '1.7rem',
      }}
    >
      <LocalShipping sx={{ fontSize: 37, color: '#000000' }} />
      Truck space
    </Typography>
    <Typography
      variant="body2"
      component="h2"
      textAlign="center"
      color="text.secondary"
      sx={{
        fontWeight: 300,
        mt: { xs: 8, sm: 0, textAlign: 'left', paddingLeft: 5 },
      }}
    >
      Drive Smarter, Load Better with truckspace.eu
    </Typography>
  </Box>
)

export default Logo
