import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Play = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19.765,9.458,4.98.019v24l14.779-9.473a3.007,3.007,0,0,0,.006-5.088Zm-1.08,3.395-11.7,7.5V3.677l11.707,7.474a1,1,0,0,1-.007,1.7Z"/></g></svg>

);
