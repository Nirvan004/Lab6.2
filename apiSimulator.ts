export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Xbox Elite Controller", price: 120 },
            { id: 2, name: "Sony WH-1000XM4", price: 300 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

export const fetchProductReviews = (
    productId: number
): Promise<{ reviewer: string; rating: number; comment: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    {
                        reviewer: "Nirvan",
                        rating: 5,
                        comment: "Nice!!! :D",
                    },
                    {
                        reviewer: "Lewis",
                        rating: 4,
                        comment: "Satisfactory."
                    }
                    {
                        reviewer: "Tina",
                        rating: 2,
                        comment: "Came late but still works nicely."
                    }
                ]);
            } else {
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1500);
    });
};
