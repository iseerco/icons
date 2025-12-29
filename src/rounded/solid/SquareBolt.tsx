import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm-3.27,13.49l-2.86,5.01c-.18,.32-.52,.5-.87,.5-.17,0-.34-.04-.5-.13-.48-.27-.65-.89-.37-1.36l2.58-4.5h-4.09c-.51,0-.99-.24-1.3-.65-.3-.41-.4-.94-.25-1.43,.02-.07,.05-.14,.09-.21l2.97-5.21c.27-.48,.88-.65,1.36-.37,.48,.27,.65,.88,.37,1.36l-2.57,4.5h4.1c.59,0,1.13,.32,1.41,.84,.28,.52,.25,1.15-.08,1.64Z"/></svg>

);
