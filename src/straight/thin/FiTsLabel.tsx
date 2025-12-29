import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLabel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,.015L2,6.331v15.169c0,1.378,1.121,2.5,2.5,2.5h15c1.379,0,2.5-1.122,2.5-2.5V6.33L12,.015Zm9,21.485c0,.827-.673,1.5-1.5,1.5H4.5c-.827,0-1.5-.673-1.5-1.5V6.881L12,1.197l9,5.683v14.62ZM10,7c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm3,0c0,.551-.448,1-1,1s-1-.449-1-1,.448-1,1-1,1,.449,1,1Z"/>
</svg>

);
