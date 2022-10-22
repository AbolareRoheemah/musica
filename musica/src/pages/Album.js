import React, { useEffect } from 'react';

export default function Album() {
    useEffect(() => {
      document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6)-80%, rgba(29,33,35, 1)), url(../../assets/images/Lead-image.png)';
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "bottom";
      document.body.style.backgroundAttachment = "fixed";
    }, [])
    

  return (
    <div className='album-ctn'>
        
    </div>
  )
}
