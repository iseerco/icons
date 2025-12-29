import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Watch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,11.586l2.707,2.707-1.414,1.414-3.293-3.293v-5.414h2v4.586Zm5,8.409v4.005h-2v-2.836c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836v2.836h-2v-4.005c-2.427-1.826-4-4.73-4-7.995s1.573-6.169,4-7.995V0h2v2.836c1.226-.537,2.578-.836,4-.836s2.774.299,4,.836V0h2v4.005c2.427,1.826,4,4.73,4,7.995s-1.573,6.169-4,7.995Zm-6,.005c4.411,0,8-3.589,8-8s-3.589-8-8-8S4,7.589,4,12s3.589,8,8,8Z"/></svg>

);
