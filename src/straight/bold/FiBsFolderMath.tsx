import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderMath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,3H12.354L8.354,1H3.5C1.57,1,0,2.57,0,4.5V23H24V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V4.5c0-.276,.225-.5,.5-.5H7.646l4,2h8.854c.275,0,.5,.224,.5,.5v13.5Zm-8-4h5v2h-5v-2Zm0-3h5v2h-5v-2Zm0-5h5v2h-5v-2Zm-6,2h-1.5v-2h1.5v-1.5h2v1.5h1.5v2h-1.5v1.5h-2v-1.5Zm3.707,4.208l-1.293,1.293,1.293,1.293-1.414,1.414-1.293-1.293-1.293,1.293-1.414-1.414,1.293-1.293-1.293-1.293,1.414-1.415,1.293,1.293,1.293-1.293,1.414,1.415Z"/>
</svg>

);
