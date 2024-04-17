import React from 'react';

const FooterComp = () => {
  const footerStyle = {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#292a28',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <div style={footerStyle}>
      <p>Copyright © 2024<br/> ILoveDogs!<br/>ILoveNfactorial!</p>
    </div>
  );
};

export default FooterComp;