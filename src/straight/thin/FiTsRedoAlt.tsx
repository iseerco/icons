import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRedoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.707,8.212c.061-.061.095-.136.137-.207l-20.344-.005c-.841,0-1.5.659-1.5,1.5v12c0,.841.659,1.5,1.5,1.5h19.5v1H2.5c-1.402,0-2.5-1.098-2.5-2.5v-12c0-1.402,1.098-2.5,2.5-2.5l20.344.005c-.042-.071-.076-.146-.137-.207l-4.949-4.95.707-.707,4.949,4.95c.378.378.586.88.586,1.414s-.208,1.037-.586,1.415l-4.949,4.95-.707-.707,4.949-4.95Z"/>
</svg>

);
