import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVectorCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9h-1.948c-1.011-3.394-3.665-6.053-7.052-7.063V0h-6v1.937c-3.387,1.01-6.042,3.669-7.052,7.063H0v6h1.948c1.011,3.394,3.665,6.053,7.052,7.063v1.937h6v-1.937c3.387-1.01,6.042-3.669,7.052-7.063h1.948v-6ZM10,1h4v4h-4V1ZM1,10h4v4H1v-4Zm13,13h-4v-4h4v4Zm1-1.985v-3.015h-6v3.015c-2.833-.944-5.06-3.175-6.004-6.015h3.004v-6h-3.004c.943-2.84,3.171-5.071,6.004-6.015v3.015h6v-3.015c2.833.944,5.06,3.175,6.004,6.015h-3.004v6h3.004c-.943,2.84-3.171,5.071-6.004,6.015Zm8-7.015h-4v-4h4v4Z"/>
</svg>

);
