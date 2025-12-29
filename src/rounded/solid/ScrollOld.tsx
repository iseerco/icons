import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScrollOld = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,2.5v-1C0,.672.672,0,1.5,0s1.5.672,1.5,1.5v3.5h-.5c-1.381,0-2.5-1.119-2.5-2.5Zm14.5,14.5h5.5v-6h-4c-.553,0-1-.448-1-1s.447-1,1-1h4v-5c0-2.209-1.791-4-4-4H4.662c.217.455.338.964.338,1.5v3.5h4c.552,0,1,.448,1,1s-.448,1-1,1h-4v6h5c.552,0,1,.448,1,1s-.448,1-1,1h-5v6.357c0,1.308.941,2.499,2.242,2.63,1.496.15,2.758-1.021,2.758-2.487,0-2.485,2.015-4.5,4.5-4.5Zm7.498,2h-7.498c-1.381,0-2.5,1.119-2.5,2.5,0,.924-.28,1.784-.76,2.5h9.35c1.586,0,2.925-1.054,3.355-2.5.017-.057.033-.176.047-.332.106-1.165-.824-2.168-1.993-2.168Z"/>
</svg>

);
