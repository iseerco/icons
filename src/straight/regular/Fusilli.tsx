import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fusilli = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,3V0h-.75c-1.157,0-2.099,.877-2.225,2h-.025c-1.654,0-3,1.346-3,3v1h-1c-1.654,0-3,1.346-3,3h-1c-1.654,0-3,1.346-3,3v1h-1c-1.654,0-3,1.346-3,3v1.02c-1.672,.105-3,1.481-3,3.18v.8H3v3h.75c1.157,0,2.099-.877,2.225-2h.025c1.654,0,3-1.346,3-3v-1h1c1.654,0,3-1.346,3-3h1c1.654,0,3-1.346,3-3v-1h1c1.654,0,3-1.346,3-3v-1.02c1.672-.105,3-1.481,3-3.18v-.8h-3ZM7,19c0,.552-.448,1-1,1h-1v-4c0-.552,.448-1,1-1h1v4Zm3-3h-1v-4c0-.551,.448-1,1-1h1v4c0,.552-.448,1-1,1Zm4-3h-1v-4c0-.551,.448-1,1-1h1v4c0,.551-.448,1-1,1Zm5-5c0,.551-.448,1-1,1h-1V5c0-.551,.448-1,1-1h1v4Z"/>
</svg>

);
