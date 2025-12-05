import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHammerCrash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="15.606" y="14.606" width={size} height={size} transform="translate(-6.292 13.97) rotate(-38.06)"/><rect x="19.543" y="10.457" width={size} height={size} transform="translate(.295 24.419) rotate(-60.598)"/><rect x="21" y="5" width={size} height={size}/><path d="M15.875,11.731l2.442-4.457c.315-.576,.389-1.24,.204-1.871s-.604-1.151-1.179-1.467L12.009,1.013C10.085-.04,7.867-.281,5.761,.332,3.656,.946,1.916,2.345,.863,4.266l-.863,1.568,6.674,3.658L0,22.132l3.537,1.868,6.645-12.586,2.355,1.291c.367,.201,.771,.304,1.179,.304,.231,0,.464-.033,.692-.1,.631-.185,1.151-.604,1.467-1.179Zm-2.371-1.916L4.199,4.715c.64-.709,1.464-1.229,2.403-1.503,1.338-.392,2.746-.237,3.965,.432l4.86,2.663-1.923,3.508Z"/></svg>
);

FiBsHammerCrash.displayName = 'FiBsHammerCrash';
