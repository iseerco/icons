import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarkerHospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.299 3.053c-1.897-1.94-4.54-3.053-7.25-3.053-5.541 0-10.049 4.508-10.049 10.049 0 4.804 5.86 10.428 9.398 13.393l.698.518.654-.553c4.209-3.556 9.247-8.755 9.349-13.336.058-2.621-.937-5.113-2.8-7.018zm-2.299 9.947h-2v2h-6v-2h-2v-6h2v-2h6v2h2zm-4-4h2v2h-2v2h-2v-2h-2v-2h2v-2h2z"/></svg>
);
