import { NetworkError, DataError } from "./errors.js";
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.8) {
                reject(new NetworkError("Failed to fetch product catalog"));
                return;
            }
            const products = [
                { id: 1, name: "Xbox Elite Controller", price: 120 },
                { id: 2, name: "Sony WH-1000XM4", price: 300 },
            ];

            if (!products || !Array.isArray(products)) {
                reject(new DataError("Invalid product catalog data"));
                return;
            }

            resolve(products);
        }, 1000);
    });
};

export const fetchProductReviews = (
    productId: number
): Promise<{ reviewer: string; rating: number; comment: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
                return;
            }
            const reviews = [
                {
                    reviewer: "Nirvan",
                    rating: 5,
                    comment: "Nice!!! :D",
                },
                {
                    reviewer: "Lewis",
                    rating: 4,
                    comment: "Satisfactory."
                },
                {
                    reviewer: "Tina",
                    rating: 2,
                    comment: "Came late but still works nicely."
                }
            ];
            if (!reviews || !Array.isArray(reviews)) {
                reject(new DataError(`Invalid review data for product ID ${productId}`));
                return;
            }
            resolve(reviews);
        }, 1500);
    });
};

export const fetchSalesReport = (): Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                reject(new NetworkError("Failed to fetch sales report"));
                return;
            }

            const report = {
                totalSales: 464067,
                unitsSold: 3245,
                averagePrice: 213.45
            };

            if (
                report.totalSales === undefined ||
                report.unitsSold === undefined ||
                report.averagePrice === undefined
            ) {
                reject(new DataError("Invalid sales report data"));
                return;
            }

            resolve(report);
        }, 1000);
    });
};