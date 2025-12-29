import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBinoculars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,5h-.5V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-4V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-.5c-1.93,0-3.5,1.57-3.5,3.5v10c0,3.033,2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5v-5.5h2v5.5c0,3.033,2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5V8.5c0-1.93-1.57-3.5-3.5-3.5ZM5.5,21c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Zm2.5-11v3.607c-.751-.385-1.599-.607-2.5-.607s-1.749,.222-2.5,.607v-5.107c0-.276,.224-.5,.5-.5H20.5c.276,0,.5,.224,.5,.5v5.107c-.751-.385-1.599-.607-2.5-.607s-1.749,.222-2.5,.607v-3.607H8Zm10.5,11c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Z"/></svg>

);
