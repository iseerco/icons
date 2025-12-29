import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ankh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,14h-4.557c1.538-2.083,3.557-5.326,3.557-8,0-3.309-2.691-6-6-6s-6,2.691-6,6c0,2.674,2.02,5.917,3.557,8h-4.557v2h6v8h2v-8h6v-2ZM12,2c2.206,0,4,1.794,4,4,0,2.425-2.446,5.972-4,7.898-1.555-1.924-4-5.468-4-7.898,0-2.206,1.794-4,4-4Z"/>
</svg>

);
