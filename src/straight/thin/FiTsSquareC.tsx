import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM6,10.636v2.728c0,3.108,2.5,5.636,5.572,5.636h.682c2.118,0,4.038-1.169,5.01-3.052l.889.459c-1.146,2.216-3.406,3.593-5.899,3.593h-.682c-3.624,0-6.572-2.977-6.572-6.636v-2.728c0-3.659,2.948-6.636,6.572-6.636h.682c2.537,0,4.816,1.413,5.946,3.686l-.896.445c-.96-1.932-2.896-3.131-5.051-3.131h-.682c-3.073,0-5.572,2.528-5.572,5.636Z"/></svg>

);
