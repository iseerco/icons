import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PumpMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.832,3.555c-.307.459-.927.582-1.387.277l-.733-.489c-1.314-.876-2.858-1.343-4.437-1.343h-2.275v4h-6v-2.5c0-1.933,1.567-3.5,3.5-3.5h4.775c1.974,0,3.905.584,5.548,1.68l.732.488c.46.307.584.927.277,1.387Zm-3.832,11.848v3.598c0,2.761-2.239,5-5,5h-6c-2.761,0-5-2.239-5-5v-3.598c0-3.265,2.041-6.198,5.029-7.402h5.943c2.988,1.205,5.029,4.137,5.029,7.402Zm-4,.598c0-.553-.447-1-1-1h-2v-2c0-.553-.447-1-1-1s-1,.447-1,1v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2c0,.553.447,1,1,1s1-.447,1-1v-2h2c.553,0,1-.447,1-1Z"/></svg>

);
