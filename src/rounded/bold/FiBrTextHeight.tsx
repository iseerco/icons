import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTextHeight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,3V22.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V3h-3.5c-1.38,0-2.5,1.12-2.5,2.5v1c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-1C0,2.47,2.47,0,5.5,0H15.5c3.03,0,5.5,2.47,5.5,5.5v1c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-1c0-1.38-1.12-2.5-2.5-2.5h-3.5Zm10.56,16h-1.56v-4h1.56c.86,0,1.29-1.04,.68-1.65l-3.06-3.06c-.38-.38-.99-.38-1.37,0l-3.06,3.06c-.61,.61-.18,1.65,.68,1.65h1.56v4h-1.56c-.86,0-1.29,1.04-.68,1.65l3.06,3.06c.38,.38,.99,.38,1.37,0l3.06-3.06c.61-.61,.18-1.65-.68-1.65Z"/></svg>

);
