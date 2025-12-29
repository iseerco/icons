import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortSizeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,1V11h10V1H14Zm9,9H15V2h8V10Zm-7,13h8V15h-8v8Zm1-7h6v6h-6v-6Zm-6.71,2.42l.71,.71-4.44,4.44c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44L.01,19.13l.71-.71,4.28,4.28V0h1V22.71l4.29-4.29Z"/></svg>

);
