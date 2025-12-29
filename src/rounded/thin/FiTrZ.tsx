import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.488,24H5.582c-1.582,0-2.917-.966-3.403-2.46-.482-1.481,.024-3.034,1.29-3.954L19.943,5.605c1.103-.802,1.202-1.991,.927-2.836-.278-.855-1.069-1.77-2.453-1.77H2.512c-.649,.01-.649-1.01,0-1h15.906c1.582,0,2.917,.966,3.403,2.46,.482,1.481-.024,3.034-1.29,3.954L4.057,18.395c-1.103,.802-1.202,1.991-.927,2.836,.278,.855,1.069,1.77,2.453,1.77h15.906c.649-.01,.649,1.01,0,1Z"/></svg>

);
