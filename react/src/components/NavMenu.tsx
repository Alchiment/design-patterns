import {MenuItem} from "../../../common/models/menu-item.model.ts";
import {Container, Navbar} from "react-bootstrap";

interface NavMenuInterface {
    title: string;
    items: MenuItem[];
}

function NavMenu({ title, items }: NavMenuInterface) {
    return (
        <div className="padding-general">
            {title && <strong>{title}</strong>}
            {items && (
                <Navbar className="bg-body-tertiary">
                    {items.map(item => (
                        <Container key={item.id}>
                            <Navbar.Brand href={item.link}>
                                <span>{item.title}</span>
                                <br/>
                                {item.description && <small>{item.description}</small>}
                            </Navbar.Brand>
                        </Container>
                    ))}
                </Navbar>
            )}
        </div>
    );
}

export default NavMenu;