import {Product} from './Product'

export class ProductService{

    public getallProducts(){
        let products : Product[];

        products=[
            new Product(1,'Apple',300),
            new Product(1,'Orange',300),
            new Product(1,'Tomate',300),
            new Product(1,'Banana',300),
            new Product(1,'Onion',300)
        ];
        return products;
    }

}