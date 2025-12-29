import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.118,5c-.118,0-.224-.065-.277-.171-.564-1.128-1.698-1.829-2.959-1.829h-.882V0c-1.657,0-3,1.343-3,3v.705l-1.55,4.294h-5.95c-.808,0-1.583.212-2.262.608-.489-.4-1.238-1.237-1.238-2.612H0c0,2.517,1.326,4.083,2.297,4.892-.195.508-.296,1.053-.296,1.613l.003,11.5h5v-5h7v5h5v-6.814l1.051-4.186h.445c1.93,0,3.5-1.57,3.5-3.5v-4.5h-2.882Zm-.118,4.5c0,.276-.224.5-.5.5h-2.785l-1.507,6H5.001v-3.5c0-.401.155-.777.438-1.061.284-.283.66-.439,1.061-.439h8.056l1.804-4.999h1.521c.118,0,.224.065.277.171.547,1.093,1.628,1.784,2.841,1.827v1.502Z"/>
</svg>

);
