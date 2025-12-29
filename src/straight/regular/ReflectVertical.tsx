import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReflectVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9c.65,0,1.27-.28,1.7-.76L21.25,0H2.75l7.54,8.24c.44,.49,1.06,.76,1.71,.76Zm4.71-7l-4.49,4.9c-.15,.17-.28,.18-.45,0L7.29,2h9.41Zm-6.41,13.75L2.75,24H21.25l-7.54-8.24c-.87-.97-2.56-.96-3.41,0Zm13.7-4.75v2H0v-2H24Z"/></svg>

);
