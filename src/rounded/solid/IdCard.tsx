import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 2h-14c-2.761 0-5 2.239-5 5v10c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-10c0-2.761-2.239-5-5-5zm-12.5 5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5zm2.703 9.979c-.068.014-.136.021-.204.021-.464 0-.88-.325-.978-.797-.145-.697-.784-1.203-1.521-1.203s-1.376.506-1.521 1.203c-.112.54-.642.884-1.182.776-.541-.112-.889-.642-.776-1.183.335-1.62 1.799-2.797 3.479-2.797s3.144 1.177 3.479 2.797c.112.541-.235 1.07-.776 1.183zm8.797.021h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1zm2-4h-6c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-6c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>
);
