import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BottleDroplet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,13.938c.748.845,1.5,1.927,1.5,2.562,0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5c0-.636.752-1.718,1.5-2.562Zm8-1.996v12.059H4v-12.059c0-1.222.547-2.359,1.501-3.123l3.499-2.799V2h-1V0h8v2h-1v4.02l3.499,2.799c.954.764,1.501,1.901,1.501,3.123Zm-4.5,4.559c0-2-2.348-4.292-2.817-4.731l-.683-.637-.683.637c-.47.439-2.817,2.731-2.817,4.731,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5Z"/>
</svg>

);
