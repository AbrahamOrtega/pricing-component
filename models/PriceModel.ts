
export default interface PriceModel {
    name: string;
    yearly: {
        price: number;
        features: string[];
    };
    monthly: {
        price: number;
        features: string[];
    };
}