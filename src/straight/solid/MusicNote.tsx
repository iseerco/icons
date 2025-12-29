import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicNote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.5,0c-1.379,0-2.5,1.121-2.5,2.5v11.761c-.952-.787-2.172-1.261-3.5-1.261-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V2.5c0-.275.225-.5.5-.5h4.5V0h-4.5Z"/>
</svg>

);
