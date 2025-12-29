import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,5.95a1,1,0,0,0-1.414,0l-5.172,5.171a3.074,3.074,0,0,1-3.4.568l6.982-6.982a1,1,0,1,0-1.414-1.414L12.3,10.286a2.984,2.984,0,0,1,.579-3.407L18.05,1.707A1,1,0,0,0,16.636.293L11.465,5.465a5.02,5.02,0,0,0-.636,6.292L.293,22.293a1,1,0,0,0,1.414,1.414L12.243,13.171a5.02,5.02,0,0,0,6.292-.636l5.172-5.171A1,1,0,0,0,23.707,5.95Z"/></svg>

);
