import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bucket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,8h-.619c-.534-3.351-2.829-6.12-5.901-7.335-.366-.406-.89-.665-1.48-.665h-4c-.589,0-1.114.26-1.48.665-3.073,1.215-5.367,3.983-5.901,7.335h-.619c-.553,0-1,.447-1,1s.447,1,1,1h.634c.025.043.486,2,.486,2h13.38c.553,0,1,.447,1,1s-.447,1-1,1H3.549l1.296,6.048c.491,2.29,2.547,3.952,4.889,3.952h4.533c2.342,0,4.397-1.662,4.889-3.952,0,0,2.186-10.005,2.211-10.048h.634c.553,0,1-.447,1-1s-.447-1-1-1Zm-17.349,0c.436-2.14,1.786-3.951,3.623-5.007.346.599.985,1.007,1.726,1.007h4c.741,0,1.381-.408,1.726-1.007,1.837,1.056,3.187,2.867,3.623,5.007H4.651Z"/>
</svg>

);
