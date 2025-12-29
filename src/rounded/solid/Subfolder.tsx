import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subfolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,11h-2.528c-.155,0-.309-.036-.448-.106l-3.155-1.578c-.416-.208-.875-.316-1.34-.316h-2.029c-1.933,0-3.5,1.567-3.5,3.5v6.5c0,2.209,1.791,4,4,4h9c2.209,0,4-1.791,4-4v-4c0-2.209-1.791-4-4-4ZM6.54,23h-1.54c-2.761,0-5-2.239-5-5V6C0,3.239,2.239,1,5,1h2.528c.466,0,.925,.108,1.341,.317l3.156,1.578c.138,.069,.291,.105,.446,.105h6.528c2.761,0,5,2.239,5,5v2.54c-1.063-.954-2.462-1.54-4-1.54h-2.292l-2.945-1.473c-.694-.347-1.458-.527-2.234-.527h-2.029c-3.038,0-5.5,2.462-5.5,5.5v6.5c0,1.538,.586,2.937,1.54,4Z"/>
</svg>

);
