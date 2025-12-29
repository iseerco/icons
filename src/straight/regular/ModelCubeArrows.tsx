import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ModelCubeArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.946,19.817l-.889-3.654-1.943.473.516,2.123-2.631-1.601v-6.728l-6-3.429v-2.976l1.597,1.596,1.414-1.414-2.66-2.66c-.731-.729-1.919-.729-2.65,0l-2.659,2.659,1.414,1.414,1.545-1.545v2.925l-6,3.429v6.728l-2.631,1.601.516-2.123-1.943-.473L.054,19.817c-.244,1.005.374,2.021,1.378,2.265l3.654.89.473-1.943-2.194-.534,2.526-1.537,6.109,3.491,6.109-3.491,2.526,1.537-2.194.534.473,1.943,3.654-.89c1.004-.244,1.622-1.26,1.378-2.265Zm-11.946-6.69l-3.845-2.196,3.845-2.197,3.845,2.197-3.845,2.196Zm-5-.554l4,2.285v4.716l-4-2.286v-4.715Zm6,7.001v-4.716l4-2.285v4.715l-4,2.286Z"/>
</svg>

);
