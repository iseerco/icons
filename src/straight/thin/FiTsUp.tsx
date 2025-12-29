import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,24H7V11H.33L10.17,.76c.49-.49,1.14-.76,1.83-.76h0c.69,0,1.35,.27,1.84,.76l9.84,10.24h-6.67v13Zm-9-1h8V10h5.33L13.12,1.46c-.29-.3-.7-.46-1.12-.46h0c-.42,0-.82,.17-1.12,.47L2.67,10h5.33v13Z"/></svg>

);
