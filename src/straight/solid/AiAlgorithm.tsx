import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AiAlgorithm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.763 5.057.53 1.404h-1.064l.535-1.404zm13.237 14.943v2c0 1.103-.897 2-2 2h-3c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h.5v-1.5c0-.276-.224-.5-.5-.5h-6v2h.5c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-3c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h.5v-2h-6c-.276 0-.5.224-.5.5v1.5h.5c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-3c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h.5v-1.5c0-1.378 1.122-2.5 2.5-2.5h6v-2h-3c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2h-3v2h6c1.378 0 2.5 1.122 2.5 2.5v1.5h.5c1.103 0 2 .897 2 2zm-9.737-11h1.237v-6h-1.237zm-4.496-1.326h1.983l.5 1.326h1.297l-2.265-6h-1.033l-2.285 5.998h1.303z"/></svg>
);
