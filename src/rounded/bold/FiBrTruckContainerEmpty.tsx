import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckContainerEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.615,10.524l-.841-2.524c-.614-1.841-2.329-3.077-4.269-3.077h-2.004c-.829,0-1.5.672-1.5,1.5v10.577H1.5c-.829,0-1.5.672-1.5,1.5,0,.004,0,.009,0,.013h0v1.987c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h1v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h6v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.838c1.181-.563,2-1.769,2-3.162v-3.604c0-.808-.129-1.605-.385-2.372Zm-5.11-2.602c.646,0,1.219.412,1.423,1.026l.841,2.524c.153.46.231.938.231,1.423v.046l-3,.039v-5.058h.504Z"/>
</svg>

);
