import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Invest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,6.525v2.16c2.361,1.126,4,3.53,4,6.315,0,1.57-.52,3.021-1.396,4.19l-4.604-4.604V3l1.596,1.596,1.414-1.414-2.596-2.596c-.779-.78-2.049-.78-2.828,0l-2.577,2.577,1.414,1.414,1.577-1.577v3.056c-4.494.499-8,4.32-8,8.944,0,4.963,4.038,9,9,9s9-4.037,9-9c0-3.909-2.51-7.235-6-8.475ZM5,15c0-3.52,2.612-6.442,6-6.928v7.342l5.19,5.19c-1.169.876-2.62,1.396-4.19,1.396-3.86,0-7-3.141-7-7Z"/>
</svg>

);
