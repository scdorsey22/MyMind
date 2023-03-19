/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from 'react';
import { AuthProvider } from './src/components/firebase/context'

export const wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};

