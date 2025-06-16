import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
// import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
    return {
        ...defaultMdxComponents,
        ...TabsComponents,
        ...components,
        // pre: (props) => (
        //     <CodeBlock {...props}>
        //         <Pre>{props.children}</Pre>
        //     </CodeBlock>
        // ),
    };
}
