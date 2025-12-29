import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTextBoxDots = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,3H2.5c-1.378,0-2.5,1.121-2.5,2.5v15.5h24V5.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,17H1V5.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v14.5Zm-15-12v9h-1v-9H3v-1h9v1h-4Zm9,8c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-8,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
