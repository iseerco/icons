import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardinalCompass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,24l-3-9L0,12l9-3L12,0l3,9,9,3-9,3-3,9ZM7.425,7.425l.473-1.385-3.898-2.039,2.039,3.898,1.385-.473Zm9.15,0l1.385,.473,2.039-3.897-3.898,2.039,.473,1.385ZM7.424,16.575l-1.385-.473-2.039,3.898,3.897-2.039-.473-1.385Zm9.151,0l-.473,1.385,3.898,2.039-2.039-3.898-1.385,.473Z"/>
</svg>

);
