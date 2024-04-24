

import { Item } from "./Item";


export const ItemList = ({ items }) => {
    
    return (
        items.map(item => (
            <div key={item.id}>
                <Item item={item} />
            </div>

        ))
    );
};
