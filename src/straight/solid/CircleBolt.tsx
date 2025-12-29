import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm3.77,13.43l-3.06,5.94-1.78-.92,2.81-5.46h-4.13c-.51,0-.99-.24-1.3-.65s-.4-.94-.25-1.43l.07-.17,3.23-6.21,1.77,.92-2.89,5.54h4.13c.59,0,1.13,.32,1.41,.85,.27,.5,.25,1.1-.04,1.59Z"/></svg>

);
