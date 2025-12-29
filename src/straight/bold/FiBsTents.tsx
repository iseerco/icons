import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTents = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,5.945L.415,19.7c-.538.883-.557,1.947-.052,2.847.509.907,1.479,1.471,2.53,1.471h13.213c1.051,0,2.021-.563,2.53-1.471.505-.899.486-1.964-.081-2.893L9.5,5.945Zm3.116,15.073l-3.116-4.817-3.116,4.817h-3.245l6.361-9.63,6.362,9.63h-3.246Zm11.021-4.471c-.509.907-1.479,1.471-2.53,1.471h-1.235l-1.982-3h2.972l-6.362-9.63-1.485,2.249-1.798-2.721L14.5-.055l9.056,13.709c.567.929.586,1.993.081,2.893Z"/>
</svg>

);
