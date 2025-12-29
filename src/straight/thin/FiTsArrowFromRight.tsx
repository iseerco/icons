import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,5v6.5H1.292L6.939,5.854l-.707-.707L.438,10.94c-.275,.276-.431,.642-.438,1.032-.007,.411,.148,.797,.439,1.089l5.793,5.793,.707-.707L1.292,12.5H23v6.5h1V5h-1Z"/></svg>

);
