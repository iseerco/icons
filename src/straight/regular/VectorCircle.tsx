import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VectorCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9h-1.935c-1.008-3.39-3.674-6.057-7.065-7.065V0h-6v1.935c-3.39,1.008-6.057,3.674-7.065,7.065H0v6h1.935c1.008,3.39,3.674,6.057,7.065,7.065v1.935h6v-1.935c3.39-1.008,6.057-3.674,7.065-7.065h1.935v-6Zm-2,4h-2v-2h2v2ZM11,2h2v2h-2v-2Zm-7,11h-2v-2h2v2Zm9,9h-2v-2h2v2Zm2-2.044v-1.956h-6v1.956c-2.284-.86-4.096-2.672-4.956-4.956h1.956v-6h-1.956c.86-2.284,2.672-4.096,4.956-4.956v1.956h6v-1.956c2.284.86,4.096,2.672,4.956,4.956h-1.956v6h1.956c-.86,2.284-2.672,4.096-4.956,4.956Z"/>
</svg>

);
