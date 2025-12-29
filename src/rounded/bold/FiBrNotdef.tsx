import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNotdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,0h-7C5.47,0,3,2.47,3,5.5v13c0,3.03,2.47,5.5,5.5,5.5h7c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm-1.66,12l4.16-5.84v11.68l-4.16-5.84Zm1.66-9c.33,0,.65,.07,.94,.19l-4.44,6.23L7.56,3.19c.29-.12,.61-.19,.94-.19h7ZM6,17.84V6.16l4.16,5.84-4.16,5.84Zm2.5,3.16c-.33,0-.65-.07-.94-.19l4.44-6.23,4.44,6.23c-.29,.12-.61,.19-.94,.19h-7Z"/></svg>

);
