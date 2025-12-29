import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShovel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.263,6.637l.707-.707L18.07.03l-.707.707,2.596,2.596-9.766,9.766-3.739-3.739-4.243,4.244c-1.426,1.425-2.211,3.321-2.211,5.338v5.057h5.057c2.017,0,3.913-.785,5.338-2.211l4.244-4.243-3.739-3.739,9.766-9.766,2.596,2.596Zm-10.038,10.909l-3.537,3.536c-1.237,1.237-2.881,1.918-4.631,1.918H1v-4.057c0-1.75.681-3.395,1.918-4.631l3.536-3.537,3.032,3.032-3.84,3.84.707.707,3.84-3.84,3.032,3.032Z"/>
</svg>

);
