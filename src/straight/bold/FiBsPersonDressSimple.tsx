import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonDressSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm6,18.5v3h-3v-3h-1v3h-3v-3h-2.199l1.492-11.934c.218-1.748,1.711-3.066,3.473-3.066h1.469c1.762,0,3.255,1.318,3.473,3.066l1.492,11.934h-2.199Zm-5.801-3h4.602l-1.07-8.562c-.031-.25-.244-.438-.496-.438h-1.469c-.252,0-.465,.188-.496,.438l-1.07,8.562Z"/></svg>

);
