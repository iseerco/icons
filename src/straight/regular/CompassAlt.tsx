import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13,2.051V0h-2V2.051C5.402,2.558,1,7.272,1,13c0,6.065,4.935,11,11,11s11-4.935,11-11c0-5.728-4.402-10.442-10-10.949Zm0,19.89v-1.941h-2v1.941c-4.165-.463-7.478-3.776-7.941-7.941h1.941v-2h-1.941c.463-4.164,3.776-7.478,7.941-7.941v1.941h2v-1.941c4.165,.463,7.478,3.777,7.941,7.941h-1.941v2h1.941c-.463,4.165-3.776,7.478-7.941,7.941ZM6.559,7.559l2.922,7.905,7.98,2.996-2.997-7.979-7.905-2.922Zm4.48,6.354l-1.098-2.972,2.972,1.098,1.126,3-3-1.127Z"/>
</svg>

);
