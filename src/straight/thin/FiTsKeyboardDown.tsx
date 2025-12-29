import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKeyboardDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,4H2.5c-1.378,0-2.5,1.122-2.5,2.5v10.5h24V6.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,12H1V6.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v9.5ZM4,10h3v1h-3v-1Zm8,1h-3v-1h3v1Zm2-1h6v1h-6v-1Zm-10-3h3v1h-3v-1Zm8,1h-3v-1h3v1Zm2-1h6v1h-6v-1Zm-6,6h8v1h-8v-1Zm10,0h2v1h-2v-1Zm-14,0h2v1h-2v-1Zm12.104,6.104l.707.707-3.75,3.75c-.292.292-.676.438-1.061.438s-.768-.146-1.061-.438l-3.75-3.75.707-.707,3.75,3.75c.195.195.512.195.707,0l3.75-3.75Z"/>
</svg>

);
