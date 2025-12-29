import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMartiniGlassCitrus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0c-2.133,0-3.964,1.224-4.875,3H0v1.5c0,1.504.635,2.947,1.743,3.963l7.257,6.963v5.574h-4v3h11v-3h-4v-5.575l4.869-4.672c.516.16,1.063.246,1.632.246,3.038,0,5.5-2.462,5.5-5.5S21.538,0,18.5,0ZM3.777,6.258c-.088-.08-.169-.167-.243-.258h13.929c-.081.1-.171.196-.269.285l-6.694,6.422L3.807,6.285l-.029-.027Z"/>
</svg>

);
