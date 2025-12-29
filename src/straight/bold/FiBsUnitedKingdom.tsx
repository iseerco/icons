import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUnitedKingdom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 5v-2l2-2v-1h-2l-1 1v1.5l-1 1 1 1.5z"/><path d="m6 10h-1l-2 1.245v1.755l1.5-.5 1 .5 1.5-1z"/><path d="m19.865 19.173 1.127-1.643-.992-1.53h-1.5l-1.513-4.077-.833-.48-.401-.98-.619-.417-.634-2.047h-3l1.533-1.053-.557-.744 2.524-1.703v-1.5h-5v-.5l2-1.5v-.999h-1.385l-2.115 1-.5 1-1.146.6-.854 1.4 1 1-1 1v2h1v1l1.5 2h2.5v1.5l1 1.5v1h-3v1l.5 1-1.5 1v1l1.713.322 1.287 1.678-1.981-.013-.519 1.013h-1.5v1l2 1h2l1-1h2l.5-1h4l2.5-.5v-1.5zm-6.618-.173-.453-.59.631-.41h1.575v-2.809l1.5 3.809z"/></svg>
);
