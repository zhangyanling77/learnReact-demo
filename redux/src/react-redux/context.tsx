import React from 'react';
import { ContextValue } from './types';
const ReactReduxContext = React.createContext<ContextValue | null>(null);
export default ReactReduxContext;
