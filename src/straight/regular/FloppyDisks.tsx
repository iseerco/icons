import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FloppyDisks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,9c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5ZM23.121,3.985l-3.105-3.106c-.566-.567-1.32-.879-2.121-.879H7c-1.654,0-3,1.346-3,3v17h20V6.106c0-.801-.313-1.555-.879-2.121Zm-13.121-1.985h6v3h-6v-3Zm12,16H6V3c0-.551.448-1,1-1h1v5h10V2.006c.225.024.44.126.602.287l3.105,3.106c.187.187.293.444.293.707v11.894ZM2,22h17v2H0V8c0-1.302.839-2.402,2-2.816v16.816Z"/>
</svg>

);
