
type ReactText = string | number;
interface ReactElement<P = any, T extends string = string> {
    type: T,
    props: P,
    key: string | null
}
type ReactChild = ReactElement | ReactText;

type ReactNode = ReactChild | boolean | null | undefined;
interface Element {

}
interface DOMElement<P, T> extends ReactElement {

}
interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {

}

declare function createElement<P, T extends Element>(
    type: string,
    props?: P | null,
    ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
interface FunctionComponentElement extends ReactElement {

}

interface FunctionComponent<P = {}> {
    (props: P): ReactElement | null
}
