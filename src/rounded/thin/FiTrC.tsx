import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.044,24h-1.045c-5.513,0-9.999-4.445-9.999-9.909v-4.182C2,4.445,6.485,0,11.999,0h1.045c3.79,0,7.191,2.109,8.879,5.504,.122,.248,.021,.547-.226,.67-.244,.123-.548,.023-.671-.225-1.517-3.053-4.575-4.95-7.982-4.95h-1.045C7.037,1,3,4.997,3,9.909v4.182c0,4.913,4.037,8.909,8.999,8.909h1.045c3.347,0,6.382-1.849,7.92-4.824,.127-.246,.431-.34,.674-.215,.245,.127,.342,.429,.215,.674-1.711,3.31-5.086,5.365-8.809,5.365Z"/></svg>

);
