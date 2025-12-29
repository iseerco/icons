import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScreenRecorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 10.5v4.5c0 2.757-2.243 5-5 5h-6v2h4c.552 0 1 .447 1 1s-.448 1-1 1h-10c-.552 0-1-.447-1-1s.448-1 1-1h4v-2h-6c-2.757 0-5-2.243-5-5v-8c0-2.757 2.243-5 5-5h8c.552 0 1 .447 1 1s-.448 1-1 1h-8c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-4.5c0-.553.448-1 1-1s1 .447 1 1zm-8-6.5c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm2 0c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm-5.083 6.326 1.458-1.094c.669-.502 1.625-.024 1.625.812v3.939c0 .837-.955 1.314-1.625.812l-1.46-1.117c-.309 1.327-1.496 2.321-2.916 2.321h-3c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3c1.422 0 2.609.996 2.917 2.326zm-1.917.674c0-.552-.449-1-1-1h-3c-.551 0-1 .448-1 1v2c0 .552.449 1 1 1h3c.551 0 1-.448 1-1z"/></svg>
);
