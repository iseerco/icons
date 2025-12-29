import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.92,23.29L5.97,12.34,1,17.19V3.51c0-.67,.25-1.3,.73-1.77,.47-.47,1.1-.73,1.77-.73h13.69l-4.85,4.97,10.95,10.95-6.36,6.36ZM5.98,10.93l10.94,10.94,4.95-4.95L10.93,5.98l3.89-3.98H3.5c-.4,0-.78,.16-1.06,.44-.28,.29-.44,.66-.44,1.07V14.81s3.98-3.88,3.98-3.88Z"/></svg>

);
