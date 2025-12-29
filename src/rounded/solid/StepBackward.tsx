import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StepBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.208.367c-1.122-.568-2.398-.464-3.412.28L5.645,9.363c-.246.181-.462.39-.645.621V1c0-.552-.447-1-1-1s-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1v-8.984c.182.231.398.441.645.621l10.152,8.725c.581.427,1.248.643,1.923.643.503,0,1.01-.12,1.489-.363,1.122-.569,1.792-1.659,1.792-2.917V3.284c0-1.258-.67-2.348-1.792-2.917Z"/></svg>

);
