import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.609,6.96H3.5c-1.933,0-3.5,1.567-3.5,3.5v3.04c0,1.933,1.567,3.5,3.5,3.5h1.524v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.021v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.02v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.021v-3c0-.553,.447-1,1-1s1,.447,1,1v3h1.524c1.933,0,3.5-1.567,3.5-3.5v-3.04c0-1.933-1.567-3.5-3.5-3.5Z"/></svg>

);
