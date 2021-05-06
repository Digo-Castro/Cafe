import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CafeContext from './CafeContext';

function CafeProvider({ children }) {
  const [language, setLanguage] = useState('EN');

  return (
    <CafeContext.Provider value={
      {
        language,
        setLanguage,
      }
  }
    >
      {children}
    </CafeContext.Provider>
  );
}

export default CafeProvider;

CafeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
