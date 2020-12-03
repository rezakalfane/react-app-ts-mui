import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { ProTip } from './ProTip';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your New Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{m:4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Your React App example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
