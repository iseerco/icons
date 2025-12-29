import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,5h-1V13H5.732l4.999,5.463c.306,.341,.744,.537,1.202,.537s.895-.195,1.201-.535l5-5.465h-5.635V5Zm-.104,12.792l-.003,.003c-.237,.264-.675,.268-.92-.003l-3.469-3.792h7.862l-3.469,3.792ZM21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Z"/></svg>

);
