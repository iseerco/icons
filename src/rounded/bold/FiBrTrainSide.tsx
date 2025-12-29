import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTrainSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,1H1.5a1.5,1.5,0,0,0,0,3H2.98V7H1.5a1.5,1.5,0,0,0,0,3H19.551a13.556,13.556,0,0,1,1.425,3.055,1.479,1.479,0,0,1-.224,1.328A1.5,1.5,0,0,1,19.536,15H1.5a1.5,1.5,0,0,0,0,3H19.536a4.5,4.5,0,0,0,4.3-5.842C22.1,6.613,16.788,1,10,1Zm2,3.227A11.227,11.227,0,0,1,17.077,7H12ZM5.98,4H9V7H5.98ZM24,21.5A1.5,1.5,0,0,1,22.5,23H1.5a1.5,1.5,0,0,1,0-3h21A1.5,1.5,0,0,1,24,21.5Z"/></svg>

);
