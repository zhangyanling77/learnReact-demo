
import React, { ReactElement, FunctionComponent, ClassComponent } from './react';

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
            domElement.className = props[propName];
        } else if (propName === 'style') {
            let styleObject: CSSStyleDeclaration = props.style;
            for (let attr in styleObject) {
                domElement.style[attr] = styleObject[attr];
            }
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
