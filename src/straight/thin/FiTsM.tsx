import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24h-1V2.055c0-.512-.237-.88-.65-1.01-.36-.113-.866-.021-1.188,.44L12,15.543,2.829,1.471c-.313-.447-.817-.539-1.178-.426-.413,.13-.65,.499-.65,1.01V24H0V2.055C0,1.106,.517,.354,1.35,.091c.849-.268,1.776,.062,2.307,.82L12,13.711,20.333,.925c.54-.773,1.468-1.104,2.317-.834,.832,.262,1.35,1.015,1.35,1.964V24Z"/></svg>

);
