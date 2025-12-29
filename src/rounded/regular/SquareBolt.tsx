import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,19c-.17,0-.34-.04-.5-.13-.48-.27-.65-.89-.37-1.36l2.58-4.5h-4.09c-.51,0-.99-.24-1.3-.65-.3-.41-.4-.94-.25-1.43,.02-.07,3.06-5.41,3.06-5.41,.27-.48,.88-.65,1.36-.37,.48,.27,.65,.88,.37,1.36l-2.57,4.5h4.1c.59,0,1.13,.32,1.41,.84,.28,.52,.25,1.15-.08,1.64l-2.86,5.01c-.18,.32-.52,.5-.87,.5Zm7,5H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h14c2.76,0,5,2.24,5,5v14c0,2.76-2.24,5-5,5ZM5,2c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3h14c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3H5Z"/></svg>

);
