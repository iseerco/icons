import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v2c0,1.76,1.306,3.221,3,3.464v9.536c0,2.481,2.018,4.5,4.5,4.5h9c2.481,0,4.5-2.019,4.5-4.5v-9.536c1.694-.244,3-1.704,3-3.464v-2c0-2.481-2.019-4.5-4.5-4.5ZM3,4.5c0-.827.673-1.5,1.5-1.5h15c.827,0,1.5.673,1.5,1.5v2c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5v-2Zm15,9.5h-7v-4h7v4Zm-12,0v-4h2v4h-2Zm0,5.5v-2.5h7v4h-5.5c-.827,0-1.5-.673-1.5-1.5Zm10.5,1.5h-.5v-4h2v2.5c0,.827-.673,1.5-1.5,1.5Z"/>
</svg>

);
