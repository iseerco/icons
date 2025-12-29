import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrInputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,8v8c0,.553-.448,1-1,1s-1-.447-1-1v-5.586l-.293.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l2-2c.286-.286.715-.374,1.09-.217.374.154.617.52.617.924Zm15-.5v9c0,3.032-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.468-5.5-5.5V7.5C0,4.468,2.467,2,5.5,2h13c3.033,0,5.5,2.468,5.5,5.5Zm-3,0c0-1.379-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.121-2.5,2.5v9c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V7.5Z"/></svg>

);
