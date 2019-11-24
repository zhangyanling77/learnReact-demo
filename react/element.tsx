import { ReactElement, FunctionComponent, ClassComponent } from './react';
/**
 * 
 * @param type React元素的类型
 * @param config 配置对象
 * @param children 
 */
function createElement(type: string | FunctionComponent | ClassComponent, config: Record<string, any> = {}, ...children: Array<any>): ReactElement {
    let propName: string;
    const props: Record<string, any> = {};
    for (propName in config) {
        props[propName] = config[propName];
    }
    props.children = children.map((child: ReactElement | string) => {
        if (typeof child === 'string') {
            return createElement(child);
        } else {
            return child;
        }
    });
    
    let element: ReactElement = { type, props }
    return element;
}

export default createElement;
