import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsModelCubeSpace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12-.005L1.5,5.996v12.008l10.5,6.001,10.5-6.001V5.996L12-.005Zm8.992,6.291l-3.492,1.995-5.5-3.158-5.5,3.158-3.492-1.995L12,1.147l8.992,5.138Zm-13.992,3.433l4.5,2.571v5.148l-4.5-2.572v-5.148Zm5.5,2.571l4.5-2.571v5.148l-4.5,2.572v-5.148Zm-.5-.867l-4.494-2.568,4.494-2.581,4.494,2.581-4.494,2.568ZM2.5,7.148l3.5,2v6.299l5.5,3.144v3.976l-9-5.143V7.148Zm10,15.419v-3.976l5.5-3.144v-6.299l3.5-2v10.276l-9,5.143Z"/>
</svg>

);
