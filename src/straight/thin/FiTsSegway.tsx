import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSegway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 13c-1.103 0-2 .897-2 2v3h-3v-3h-4.5v-6.889l3.318-7.111h4.182v-1h-16v1h4.182l3.318 7.111v6.889h-4.5v3h-3v-3c0-1.103-.897-2-2-2s-2 .897-2 2v7c0 1.103.897 2 2 2s2-.897 2-2v-3h16v3c0 1.103.897 2 2 2s2-.897 2-2v-7c0-1.103-.897-2-2-2zm-7.285-12-2.715 5.818-2.715-5.818zm-11.715 21c0 .551-.449 1-1 1s-1-.449-1-1v-7c0-.551.449-1 1-1s1 .449 1 1zm5-6h8v2h-8zm15 6c0 .551-.448 1-1 1s-1-.449-1-1v-7c0-.551.448-1 1-1s1 .449 1 1z"/></svg>
);
