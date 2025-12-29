import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatWizard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.848,22l-6.077-14.339L20.6.003l-8.684,1.532c-1.712.302-3.122,1.446-3.771,3.059L1.15,22H0v2h24v-2h-1.152Zm-12.348-8l-.833-1.667-1.667-.833,1.667-.833.833-1.667.833,1.667,1.667.833-1.667.833-.833,1.667Zm5,4.5l-1,2-1-2-2-1,2-1,1-2,1,2,2,1-2,1Z"/></svg>

);
