import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsReflectVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9c.56,0,1.1-.24,1.47-.65L21.11,0H2.89l7.63,8.34c.38,.42,.91,.66,1.48,.66ZM18.84,1l-6.11,6.67c-.38,.42-1.08,.42-1.47,0L5.16,1h13.68ZM10.53,15.65L2.89,24H21.11l-7.63-8.34c-.75-.84-2.2-.83-2.95,0Zm13.47-4.15v1H0v-1H24Z"/></svg>

);
