import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StandardDefinition = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,10.5v3c0,.827-.673,1.5-1.5,1.5h-1.5v-6h1.5c.827,0,1.5.673,1.5,1.5Zm6-5.5v17H0V5c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3ZM6,10c0-.551.448-1,1-1h2c.552,0,1,.449,1,1h2c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3,0,1.36.974,2.51,2.315,2.733l3.041.507c.373.062.644.382.644.76,0,.551-.448,1-1,1h-2c-.552,0-1-.449-1-1h-2c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3,0-1.36-.974-2.51-2.315-2.733l-3.041-.507c-.373-.062-.644-.382-.644-.76Zm14,.5c0-1.93-1.57-3.5-3.5-3.5h-3.5v10h3.5c1.93,0,3.5-1.57,3.5-3.5v-3Z"/>
</svg>

);
