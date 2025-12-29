import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHouseUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.576,5.327L15.077.941c-1.869-1.262-4.286-1.262-6.153,0L2.424,5.327c-1.518,1.024-2.424,2.729-2.424,4.559v8.614c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5v-8.614c0-1.83-.906-3.534-2.424-4.559Zm-.576,13.173c0,1.379-1.121,2.5-2.5,2.5h-1.5c0-2.761-2.239-5-5-5s-5,2.239-5,5h-1.5c-1.379,0-2.5-1.121-2.5-2.5v-8.614c0-.832.412-1.606,1.102-2.072l6.501-4.386c.424-.287.911-.431,1.397-.431s.974.144,1.398.431l6.5,4.386c.689.466,1.102,1.24,1.102,2.072v8.614Zm-6-7.5c0,1.655-1.345,3-3,3s-3-1.345-3-3,1.345-3,3-3,3,1.345,3,3Z"/>
</svg>

);
