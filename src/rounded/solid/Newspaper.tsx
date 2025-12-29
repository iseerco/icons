import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Newspaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,22v-12c0-2.209,1.791-4,4-4h0v16c0,1.105-.895,2-2,2h0C.895,24,0,23.105,0,22ZM24,5v14c0,2.761-2.239,5-5,5H5.444c.345-.591.556-1.268.556-2V5c0-2.761,2.239-5,5-5h8c2.761,0,5,2.239,5,5Zm-14,3h2c.552,0,1-.448,1-1v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552.448,1,1,1Zm10,10h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-4c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h4c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Z"/>
</svg>

);
