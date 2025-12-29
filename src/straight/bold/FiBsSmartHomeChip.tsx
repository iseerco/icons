import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSmartHomeChip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 8v-3h-2.051c-.221-1.527-1.423-2.728-2.949-2.949v-2.051h-3v2h-2.5v-2h-3v2h-2.5v-2h-3v2.051c-1.527.221-2.728 1.423-2.949 2.949h-2.051v3h2v2.5h-2v3h2v2.5h-2v3h2v3h3v2h3v-2h2.5v2h3v-2h2.5v2h3v-2h3v-3h2v-3h-2v-2.5h2v-3h-2v-2.5zm-5 11h-14v-13.5c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5zm-2.64-9.037-3.333-2.608c-.603-.472-1.451-.472-2.054 0l-3.333 2.608c-.404.316-.64.8-.64 1.312v5.725h10v-5.725c0-.513-.236-.997-.64-1.312zm-2.86 4.537h-3v-3h3z"/></svg>
);
