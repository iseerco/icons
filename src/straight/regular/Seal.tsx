import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Seal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,8.479V3.5h-4.979L12-.021l-3.521,3.521H3.5v4.979L-.021,12l3.521,3.521v4.979h4.979l3.521,3.521,3.521-3.521h4.979v-4.979l3.521-3.521-3.521-3.521Zm-2,6.213v3.808h-3.808l-2.692,2.692-2.692-2.692h-3.808v-3.808l-2.692-2.692,2.692-2.692v-3.808h3.808l2.692-2.692,2.692,2.692h3.808v3.808l2.692,2.692-2.692,2.692Z"/>
</svg>

);
