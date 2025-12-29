import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipoardWrong = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414Zm5,18.586H4V3c0-.552,.449-1,1-1H13v7h7v13Zm-8-7.914l2.793-2.793,1.414,1.414-2.793,2.793,2.793,2.793-1.414,1.414-2.793-2.793-2.793,2.793-1.414-1.414,2.793-2.793-2.793-2.793,1.414-1.414,2.793,2.793Z"/>
</svg>

);
