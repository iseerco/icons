import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeafMaple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.024,17.067l2.27-3.216-2.902-1.244,4.557-3.646-2.684-2.013,2.106-6.32-6.32,2.106L15.038.051l-3.646,4.557-1.252-2.921-3.174,2.292L3.5-.025v5.025H-.081l2.461,7.385L.28,16.586l4.185.837L.014,21.875l2.121,2.121,4.445-4.445.834,4.169,4.201-2.1,7.385,2.461v-3.581h5.144l-4.12-3.433Zm-6.416-3.675l4.098,1.756-1.66,2.351-.046,2.419-4.615-1.539-1.799.9-.456-2.28,2.685-2.685-2.121-2.121-2.679,2.679-2.296-.459.9-1.799-1.539-4.615h2.397l.018.021,2.364-1.708,1.748,4.079,4.354-5.443.987,1.316,2.68-.894-.894,2.68,1.316.987-5.443,4.354Z"/>
</svg>

);
