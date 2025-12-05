import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCircleK: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm4.508-5.317c.451.694.254,1.624-.44,2.075-.252.164-.536.242-.816.242-.49,0-.972-.24-1.259-.683l-2.806-4.317h-1.186v3.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V7.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v2.5h1.286l2.8-3.446c.521-.643,1.466-.742,2.11-.218.643.522.74,1.467.218,2.11l-2.562,3.152,2.655,4.084Z"/></svg>
);

FiBrCircleK.displayName = 'FiBrCircleK';
