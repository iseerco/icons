import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSmartGlasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 5h-17c-1.93 0-3.5 1.57-3.5 3.5l1.157 10.5h8.213l2.63-4.602 2.63 4.602h8.213c.011-.18 1.165-10.335 1.157-10.5 0-1.93-1.57-3.5-3.5-3.5zm-.343 11h-3.786l-2.104-3.68c-.463-.812-1.333-1.316-2.268-1.316s-1.804.504-2.268 1.316l-2.104 3.68h-3.784l-.667-6h4.824v-2h12.5c.257 0 .469.195.497.444z"/></svg>
);
