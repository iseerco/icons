import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-2.502-6h7.502v2h-8.361c-.664,0-1.258-.396-1.513-1.011-.254-.614-.115-1.315.355-1.785l7.021-7.204h-7.502v-2h8.361c.664,0,1.258.396,1.513,1.011.254.614.115,1.315-.355,1.785l-7.021,7.204Z"/></svg>

);
