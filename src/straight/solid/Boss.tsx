import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boss = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,5c0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5Zm17,15H0v2h2v2h20v-2h2v-2Zm-12.586-6.379l-1.747-2.621h-.667c-2.757,0-5,2.243-5,5v2h6.196l1.218-4.379Zm2.919-2.621l-1.747,2.621,1.218,4.379h6.196v-2c0-2.757-2.243-5-5-5h-.667Z"/>
</svg>

);
