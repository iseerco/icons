import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMagnifyingGlassWave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.988,23.281l-6.584-6.584c1.607-1.775,2.596-4.12,2.596-6.697C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.577,0,4.922-.989,6.697-2.596l6.584,6.584.707-.707ZM1,10C1,5.037,5.038,1,10,1s9,4.037,9,9-4.038,9-9,9S1,14.963,1,10Zm7.494,6h3l.006-12h-3l-.006,12Zm1.006-11h1l-.005,10h-1l.005-10Zm3.494,8.994h3l.007-7.994h-3l-.007,7.994Zm1.006-6.994h1l-.005,5.994h-1l.005-5.994Zm-10,6h3v-6h-3v6Zm1-5h1v4h-1v-4Z"/>
</svg>

);
