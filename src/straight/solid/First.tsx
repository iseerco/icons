import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const First = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2v20h-2V5.341l-2.87,2.943-1.432-1.396,4.766-4.888h1.536Zm-10,7h2v2h-2v3h2v2h-2v2h-2v-2h-3v2h-2v-2h-2v-2h2v-3h-2v-2h2v-2h2v2h3v-2h2v2Zm-2,2h-3v3h3v-3Z"/>
</svg>

);
