import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.824,5.175L13.107.458c-.608-.609-1.604-.611-2.214,0l-4.718,4.718.707.707L11.5,1.266v22.734h1V1.265l4.617,4.617.707-.707Z"/>
</svg>

);
