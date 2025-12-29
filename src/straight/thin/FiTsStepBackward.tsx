import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStepBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,.066L4,11.399V0h-1v24h1v-11.399l17,11.333V.066Zm-1,22L4.901,12,20,1.934v20.132Z"/></svg>

);
