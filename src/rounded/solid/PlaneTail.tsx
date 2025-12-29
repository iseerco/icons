import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaneTail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.61,16.085c-4.229-1.525-12.397-4.085-19.603-4.085H1c-.553,0-1,.447-1,1v10c0,.553,.447,1,1,1H3.008c7.196,0,15.358-2.479,19.583-3.956,.853-.298,1.405-1.072,1.409-1.973s-.541-1.681-1.39-1.986Zm-9.61,2.915h-5c-.553,0-1-.447-1-1s.447-1,1-1h5c.553,0,1,.447,1,1s-.447,1-1,1Zm-4.439-8.586c.26-.247,.512-.512,.739-.814L15.15,1.801c.845-1.128,2.19-1.801,3.6-1.801h.298c.783,0,1.505,.356,1.982,.977,.477,.621,.635,1.411,.433,2.168l-2.562,9.608c-3.003-.908-6.633-1.825-10.34-2.339Z"/></svg>

);
