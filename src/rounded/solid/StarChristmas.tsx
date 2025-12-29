import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarChristmas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.939,23.371c-.345.839-1.533.839-1.878,0l-2.89-7.542L.629,12.939c-.839-.345-.839-1.533,0-1.878l7.542-2.89L11.061.629c.345-.839,1.533-.839,1.878,0l2.89,7.542,7.542,2.89c.839.345.839,1.533,0,1.878l-7.542,2.89-2.89,7.542ZM4.778,7.405l1.861-.766.77-1.871-3.922-2.602c-.866-.572-1.894.455-1.322,1.322l2.612,3.917Zm12.583-.766l1.861.766,2.612-3.917c.572-.866-.456-1.894-1.322-1.322l-3.922,2.602.77,1.871Zm1.867,9.954l-1.867.769-.766,1.861,3.918,2.6c.866.572,1.894-.455,1.322-1.322l-2.606-3.907Zm-12.59.769l-1.867-.769-2.606,3.907c-.572.866.456,1.894,1.322,1.322l3.918-2.6-.766-1.861Z"/></svg>

);
