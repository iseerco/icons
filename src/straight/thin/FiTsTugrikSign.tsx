import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTugrikSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,1V9.06l7.5-2.5v1.05l-7.5,2.5v3.39l7.5-2.5v1.05l-7.5,2.5v9.45h-1V14.88l-7.5,2.5v-1.05l7.5-2.5v-3.39l-7.5,2.5v-1.05l7.5-2.5V1H2V0H22V1H12.5Z"/></svg>

);
