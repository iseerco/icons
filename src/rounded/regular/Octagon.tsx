import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Octagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.95,24h-5.8c-1.33,0-2.59-.52-3.54-1.46L1.52,18.44C.57,17.49,.05,16.23,.05,14.9v-5.8C.05,7.77,.57,6.51,1.52,5.56L5.62,1.46c.94-.94,2.2-1.46,3.54-1.46h5.8c1.34,0,2.59,.52,3.54,1.46l4.1,4.1c.94,.94,1.46,2.2,1.46,3.54v5.8c0,1.33-.52,2.59-1.46,3.54l-4.1,4.1c-.94,.94-2.2,1.46-3.54,1.46ZM9.15,2c-.8,0-1.55,.31-2.12,.88L2.93,6.98c-.57,.57-.88,1.32-.88,2.12v5.8c0,.8,.31,1.55,.88,2.12l4.1,4.1c.57,.57,1.32,.88,2.12,.88h5.8c.8,0,1.56-.31,2.12-.88l4.1-4.1c.57-.57,.88-1.32,.88-2.12v-5.8c0-.8-.31-1.55-.88-2.12l-4.1-4.1c-.57-.57-1.32-.88-2.12-.88h-5.8Z"/></svg>

);
