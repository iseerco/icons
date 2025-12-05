import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowToLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.5,19c.276,0,.5-.224,.5-.5v-5.599c.124,.321,.31,.617,.561,.867l5.086,5.086c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707L2.268,13.061c-.16-.16-.275-.353-.348-.561H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H1.919c.074-.208,.188-.4,.348-.561L7.354,5.854c.195-.195,.195-.512,0-.707s-.512-.195-.707,0L1.561,10.232c-.251,.25-.437,.546-.561,.867V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v13c0,.276,.224,.5,.5,.5Z"/></svg>
);

FiTrArrowToLeft.displayName = 'FiTrArrowToLeft';
