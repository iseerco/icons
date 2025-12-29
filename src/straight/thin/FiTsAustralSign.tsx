import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAustralSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12v-1h-5.82L14.22,1.35c-.41-.82-1.27-1.35-2.22-1.35s-1.82,.54-2.26,1.45l-3.91,9.55H0v1H5.41l-1.23,3H0v1H3.78L.5,24H1.58l3.27-8h14.29l3.28,8h1.08l-3.28-8h3.78v-1h-4.19l-1.23-3h5.42ZM10.65,1.86c.27-.55,.77-.86,1.36-.86s1.07,.29,1.31,.75l3.79,9.25H6.9L10.65,1.86Zm8.09,13.14H5.27l1.23-3h11.01l1.23,3Z"/></svg>

);
