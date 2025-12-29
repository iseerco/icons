import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrGreaterThan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.5,24c-.193,0-.377-.112-.459-.301-.109-.254.007-.548.26-.658l21.501-9.321c.738-.301,1.216-.985,1.198-1.708-.017-.693-.482-1.326-1.188-1.613L.299.958C.046.847-.068.552.042.299.153.047.45-.066.701.042l21.501,9.437c1.061.432,1.771,1.419,1.798,2.509.027,1.135-.7,2.202-1.811,2.654L.699,23.959c-.065.028-.133.041-.199.041Z"/>
</svg>

);
