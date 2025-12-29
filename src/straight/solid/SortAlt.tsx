import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.597,5.597l-2.597-2.597V24h-2V3l-2.569,2.569-1.414-1.414L15.586,.586c.779-.779,2.049-.779,2.828,0l3.597,3.597-1.414,1.414Zm-12.597,15.403V0h-2V21l-2.593-2.593-1.414,1.414,3.593,3.593c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l3.574-3.573-1.414-1.414-2.574,2.573Z"/></svg>

);
