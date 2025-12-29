import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0H7c-1.654,0-3,1.346-3,3v6.706c0,4.178,3.077,7.716,7,8.23v4.064h-3c-.552,0-1,.447-1,1s.448,1,1,1h8c.552,0,1-.447,1-1s-.448-1-1-1h-3v-4.061c1.716-.212,3.306-.969,4.571-2.197,1.566-1.521,2.429-3.56,2.429-5.742V3c0-1.654-1.346-3-3-3Zm1,10c0,1.637-.647,3.166-1.822,4.307-1.174,1.14-2.731,1.732-4.363,1.69-3.207-.096-5.815-2.918-5.815-6.291V3c0-.552.449-1,1-1h10c.551,0,1,.448,1,1v7Z"/>
</svg>

);
