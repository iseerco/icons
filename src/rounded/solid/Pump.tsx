import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,6c-2.209,0-4,1.791-4,4v10c0,2.209,1.791,4,4,4h4c2.209,0,4-1.791,4-4v-10c0-2.209-1.791-4-4-4h-4Zm5,15h-5c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h5c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Zm0-5h-5c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h5c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Zm0-5h-5c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h5c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1ZM11,2h-1v17H2v1c0,.552-.448,1-1,1h0c-.552,0-1-.448-1-1v-7c0-.552.448-1,1-1h0c.552,0,1,.448,1,1v1h3V2h-1c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h7c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Z"/>
</svg>

);
