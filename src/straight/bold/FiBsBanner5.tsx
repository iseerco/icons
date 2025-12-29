import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBanner5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11s-1.593-1.057-4-1.634v-3.882l-.943-.377c-.112-.045-2.816-1.107-7.057-1.107s-6.944,1.062-7.057,1.107l-.943.377v3.882c-2.407.577-4,1.634-4,1.634,1.5.932,3,3,3,3,0,0-1.808,2.107-3,5,2.5-1,5.184-1.822,7-2v-2.36c1.103-.272,2.97-.64,5-.64s3.897.368,5,.64v2.36c1.816.178,4.5,1,7,2-1.192-2.893-3-5-3-5,0,0,1.5-2.068,3-3Zm-7,.559c-1.279-.276-3.063-.559-5-.559s-3.721.283-5,.559v-3.954c1.001-.261,2.745-.605,5-.605s4.001.344,5,.604v3.955Z"/>
</svg>

);
