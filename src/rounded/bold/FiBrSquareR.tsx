import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareR = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,10c0-2.757-2.243-5-5-5h-3.5c-1.93,0-3.5,1.57-3.5,3.5v9c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-2.5h3.668l2.059,3.295c.285.455.773.705,1.273.705.271,0,.547-.073.794-.228.702-.439.916-1.365.478-2.067l-1.565-2.504c1.378-.891,2.292-2.442,2.292-4.201Zm-9-1.5c0-.276.225-.5.5-.5h3.5c1.103,0,2,.897,2,2s-.897,2-2,2h-4v-3.5ZM18.5,0H5.5C2.468,0,0,2.467,0,5.5v13c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V5.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.121-2.5-2.5V5.5c0-1.378,1.121-2.5,2.5-2.5h13c1.379,0,2.5,1.122,2.5,2.5v13Z"/></svg>

);
