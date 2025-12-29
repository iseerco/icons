import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.5,24c-.084,0-.169-.021-.248-.066-.24-.137-.323-.442-.186-.682L18.898,2.521c.154-.309,.136-.697-.06-1.015-.196-.317-.536-.507-.909-.507H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h13.43c.722,0,1.38,.367,1.76,.981,.379,.614,.413,1.367,.09,2.012L7.934,23.748c-.092,.162-.261,.252-.435,.252Z"/></svg>

);
