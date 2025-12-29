import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAgeRestrictionTwelve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,11.5v1h-2.5v2.5h-1v-2.5h-2.5v-1h2.5v-2.5h1v2.5h2.5ZM5.234,7l-2.367,2.612.741.672,1.392-1.536v8.252h1V7h-.766Zm18.766,5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Zm-12.004,2.201c1.338-.837,3.004-1.878,3.004-4.201,0-1.654-1.346-3-3-3s-3,1.346-3,3h1c0-1.103.897-2,2-2s2,.897,2,2c0,1.77-1.231,2.538-2.534,3.353-1.212.758-2.466,1.542-2.466,3.147v.5h6v-1h-4.927c.217-.698.909-1.165,1.923-1.799Z"/>
</svg>

);
