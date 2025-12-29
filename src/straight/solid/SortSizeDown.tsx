import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortSizeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,17.5l1.41,1.41-4.5,4.5c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58L.09,18.91l1.41-1.41,3.5,3.5V0h2V21l3.5-3.5ZM14,1V11h10V1H14Zm2,22h8V15h-8v8Z"/></svg>

);
