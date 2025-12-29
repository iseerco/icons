import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BottleDroplet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.499,8.818l-3.499-2.799V2h1V0h-8v2h1v4.02l-3.499,2.799c-.954.764-1.501,1.901-1.501,3.123v12.059h16v-12.059c0-1.222-.547-2.359-1.501-3.123Zm-.499,13.182H6v-10.059c0-.61.273-1.18.751-1.561l4.249-3.4V2h2v4.98l4.249,3.4c.478.381.751.95.751,1.561v10.059Zm-5.317-10.231l-.683-.637-.683.637c-.47.439-2.817,2.731-2.817,4.731,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-2-2.348-4.292-2.817-4.731Zm-.683,6.231c-.827,0-1.5-.673-1.5-1.5,0-.636.752-1.718,1.5-2.562.748.845,1.5,1.927,1.5,2.562,0,.827-.673,1.5-1.5,1.5Z"/>
</svg>

);
