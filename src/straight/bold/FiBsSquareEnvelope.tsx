import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareEnvelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.646 10.854-3.729-3.845c.028-.001 8.207.004 8.27.01l-3.835 3.835c-.182.182-.525.181-.707 0zm.354 3.146c-.935 0-1.814-.364-2.475-1.026l-3.496-3.496c-.014.168-.029.334-.029.522v7h12v-7.551l-3.525 3.525c-.661.661-1.54 1.025-2.475 1.025zm12-10.5v20.5h-24v-20.5c0-1.93 1.57-3.5 3.5-3.5h17c1.93 0 3.5 1.57 3.5 3.5zm-3 0c0-.276-.224-.5-.5-.5h-17c-.276 0-.5.224-.5.5v17.5h18z"/></svg>
);
