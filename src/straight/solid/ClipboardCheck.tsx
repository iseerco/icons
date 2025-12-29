import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2H3v19c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-3.921,13.42c-.386.386-.895.58-1.405.58s-1.026-.195-1.417-.586l-2.279-2.193,1.387-1.441,2.293,2.207,4.813-4.7,1.4,1.427-4.792,4.707Z"/>
</svg>

);
