
import React, { ReactElement, FunctionComponent, ClassComponent } from './react';
//1. element={type:'h1',props:{className,style,children}}
//render方法里的 typeof element类型判断有误
//把 element 通过createElement方法里我们返回的是个对象呀
function render(element: ReactElement, container: HTMLElement): any {
    console.log('element', element);
    if (typeof element.type == 'string') {
        return container.appendChild(document.createTextNode(element.type));
    }
    let type: string | FunctionComponent | ClassComponent, props;
    type = element.type;
    props = element.props;
    let domElement: HTMLElement;
    if ((type as ClassComponent).isReactComponent) {
        element = new (type as ClassComponent)(props).render()!;
        type = element.type;
        props = element.props;
    } else if (typeof type === 'function') {
        element = (type as FunctionComponent)(props);
        type = element.type;
        props = element.props;
    }
    domElement = document.createElement(type as string);
    for (let propName in props) {
        if (propName === 'className') {
            domElement.className = props[propName];//处理类名
        } else if (propName === 'style') {
            let styleObject: CSSStyleDeclaration = props.style;//{ color: 'red', fontSize: 25 };
            for (let attr in styleObject) {
                domElement.style[attr] = styleObject[attr];
            }
            /*  let cssText = Object.keys(styleObject).map((attr: string) => {
                 return (attr.replace(/([A-Z])/g, function () {
                     return '-' + arguments[1].toLowerCase()
                 })) + ':' + styleObject[attr];
             }).join(';');//color:red;font-size:25
 
             domElement.style.cssText = cssText; */
        } else if (propName === 'children') {
            props.children.forEach((child: any) => {
                render(child, domElement);
            });
        } else {
            domElement.setAttribute(propName, props[propName]);
        }
    }
    container.appendChild(domElement);
}
export default { render }
