import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTentArrowLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.049,6L2.477,19.573c-.555.908-.574,2.004-.054,2.931.524.935,1.523,1.515,2.606,1.515h14.039c1.083,0,2.081-.58,2.605-1.514.521-.926.501-2.021-.081-2.978L12.049,6Zm3.262,15.024l-3.262-4.524-3.268,4.534-3.679.006,6.947-9.597,6.935,9.576-3.673.006Z"/>
  <path d="m23.696,3.775L19.989-.018v3H4.049V-.018L.342,3.775c-.391.39-.391,1.024,0,1.414l3.707,3.793v-3h15.94v3l3.707-3.793c.39-.391.39-1.024,0-1.414Z"/>
</svg>

);
