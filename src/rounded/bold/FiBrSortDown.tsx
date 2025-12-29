import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.558,18c-.854,0-1.676-.351-2.254-.961L3.295,11.256c-.741-.767-.934-1.792-.541-2.715,.397-.937,1.323-1.541,2.359-1.541h12.887c1.036,0,1.962,.604,2.359,1.541,.393,.923,.2,1.948-.502,2.676l-6.097,5.871c-.528,.562-1.35,.912-2.203,.912ZM6.314,10l5.243,5c.016-.017,5.239-5,5.239-5H6.314Z"/></svg>

);
