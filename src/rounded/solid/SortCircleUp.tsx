import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5.705,14.709l-4.183,4.161c-.405.405-.946.63-1.522.63s-1.117-.225-1.524-.632l-4.181-4.159c-.287-.286-.374-.716-.22-1.091.155-.374.52-.618.925-.618h10c.405,0,.77.244.925.618.154.375.067.805-.22,1.091Zm-.569-3.709H6.864c-.795,0-1.189-.966-.62-1.521l4.607-4.503c.635-.635,1.663-.635,2.298,0l4.607,4.503c.569.556.175,1.521-.62,1.521Zm-7.713,4h5.154l-2.467,2.454c-.076.076-.143.078-.223-.002l-2.465-2.452Z"/>
</svg>

);
