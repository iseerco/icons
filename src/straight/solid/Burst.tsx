import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Burst = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.542,23.961l-2.96-5.531-5.797,1.991,2.138-5.825L.163,12.052l5.642-2.782L-.006,.15,9.605,5.316,12.42,.028l2.911,5.454,7.074-2.995-3.422,6.756,4.94,2.639-4.819,2.578,4.583,8.663-8.389-4.549-2.757,5.388Z"/>
</svg>

);
