import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,23.67v-6.67H0V7H13V.33l10.24,9.84c.49,.49,.76,1.14,.76,1.83s-.27,1.35-.76,1.84l-10.24,9.84ZM1,16H14v5.33l8.54-8.2c.3-.29,.46-.7,.46-1.12,0-.42-.17-.82-.47-1.12L14,2.67v5.33H1v8Z"/></svg>

);
