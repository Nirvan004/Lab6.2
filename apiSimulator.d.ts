export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: (productId: number) => Promise<{
    reviewer: string;
    rating: number;
    comment: string;
}[]>;
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}>;
//# sourceMappingURL=apiSimulator.d.ts.map