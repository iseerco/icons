import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BurgerGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,12h-2.89l.87-8.66c.1-.85-.17-1.7-.74-2.34s-1.38-1-2.24-1H3C2.15,.01,1.33,.38,.76,1.01,.19,1.65-.08,2.5,.02,3.34L2.1,24H20c2.21,0,4-1.79,4-4v-4c0-2.21-1.79-4-4-4Zm2,4v1H10v-1c0-1.1,.9-2,2-2h8c1.1,0,2,.9,2,2ZM2.25,2.35c.19-.22,.46-.33,.75-.33H15c.29-.01,.55,.11,.75,.32,.19,.21,.28,.49,.25,.79l-.29,2.87H2.3l-.29-2.88c-.03-.29,.06-.56,.25-.78Zm.24,5.65H15.5l-.4,4h-3.1c-2.21,0-4,1.79-4,4v4c0,.74,.21,1.42,.56,2.01H3.9s-1.41-14.01-1.41-14.01Zm17.5,14H12c-1.1,0-2-.9-2-2v-1h4l3,2,3-2h2v1c0,1.1-.9,2-2,2Z"/></svg>

);
