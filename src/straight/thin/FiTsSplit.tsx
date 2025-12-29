import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSplit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.56,17.44l-4.42-4.5-.71,.7,4.28,4.36H14.38c-.42,0-.82-.18-1.1-.48l-5.09-5.52,5.09-5.52c.28-.31,.69-.48,1.1-.48h8.33l-4.28,4.36,.71,.7,4.42-4.5c.58-.58,.58-1.54,0-2.12L19.14,.02l-.71,.71,4.27,4.27H14.38c-.7,0-1.37,.29-1.84,.8l-5.26,5.7H0v1H7.28l5.26,5.7c.47,.51,1.14,.8,1.84,.8h8.33l-4.27,4.27,.71,.71,4.42-4.42c.58-.58,.58-1.54,0-2.12Z"/></svg>

);
