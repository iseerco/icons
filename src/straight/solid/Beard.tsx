import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Beard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.841,2l-.26,.606c-.976,2.277-3.053,4.138-4.162,5.018-.989-.999-2.451-1.624-3.919-1.624h-3c-1.467,0-2.929,.625-3.918,1.624-1.11-.88-3.187-2.741-4.163-5.018l-.26-.606H0v7.834c-.068,4.774,4.941,9.961,12,12.749,7.06-2.788,12.067-7.974,12-12.749V2h-2.159Zm-6.617,9.337c-1.012,.417-2.258,.663-3.223,.663-.96,0-2.29-.242-3.29-.655-.03-1.275,1.013-2.348,2.29-2.345h1.962c1.255-.009,2.366,1.081,2.262,2.337Z"/>
</svg>

);
