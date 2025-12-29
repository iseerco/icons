import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMarkerHospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0h-.003c-5.544.007-10.058 4.523-10.064 10.067.451 6.254 8.316 12.299 10.067 13.933 1.739-1.62 9.626-7.703 10.067-13.936-.006-5.543-4.523-10.058-10.067-10.064zm0 20.044c-3.583-3.237-7.066-7.568-7.066-9.975.004-3.892 3.173-7.063 7.066-7.069 3.893.005 7.063 3.175 7.068 7.066 0 2.403-3.484 6.737-7.068 9.978zm1.5-11.544h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3z"/></svg>
);
