/// <reference types="react" />
import Document, { DocumentContext } from "next/document";
declare class MyDocument extends Document {
    static getInitialProps(ctx: DocumentContext): Promise<{
        styles: JSX.Element;
        html: string;
        head?: JSX.Element[];
    }>;
    render(): JSX.Element;
}
export default MyDocument;
