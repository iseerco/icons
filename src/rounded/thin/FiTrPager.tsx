import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5,3H4.5C2.019,3,0,5.019,0,7.5v9c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,13.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V7.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v9Zm-3.5-9.5H4.5c-.276,0-.5.224-.5.5v4c0,.276.224.5.5.5h15c.276,0,.5-.224.5-.5v-4c0-.276-.224-.5-.5-.5Zm-.5,4H5v-3h14v3Zm-12,3.5c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Zm5,0c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2c.276,0,.5.224.5.5Z"/></svg>

);
