import ClienteContext from "./ClienteContext";

export default function Contexts({ children }) {
    return (
        <ClienteContext>
            {children}
        </ClienteContext>
    )
}