import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPasswordComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18V4.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,1,0,2.57,0,4.5v13.5h10.5v2h-4v3h11v-3h-4v-2h10.5ZM3,4.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v10.5H3V4.5Zm11.444,3.958l-1.03,1.03,1.03,1.03-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414Zm5.558,0l-1.03,1.03,1.03,1.03-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414Zm-11.116,0l-1.03,1.03,1.03,1.03-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414Z"/>
</svg>

);
