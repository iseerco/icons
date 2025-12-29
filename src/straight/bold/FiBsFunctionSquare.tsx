import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFunctionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v17.5ZM10,4.75h1v2.5h-1c-.414,0-.75.337-.75.75v3h1.75v2.5h-1.75v5.5h-2.5v-5.5h-1.75v-2.5h1.75v-3c0-1.792,1.458-3.25,3.25-3.25Zm9.687,6.25l-2.446,4,2.446,4h-2.931l-.981-1.604-.981,1.604h-2.931l2.446-4-2.446-4h2.931l.981,1.604.981-1.604h2.931Z"/>
</svg>

);
