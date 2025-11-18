import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";
const runApp = () => {
    console.log("Starting API calls...\n");
    fetchProductCatalog()
        .then((products) => {
        console.log("Product Catalog:");
        console.log(products);
        const reviewPromises = products.map((product) => {
            return fetchProductReviews(product.id)
                .then((reviews) => {
                console.log(`Reviews for: ${product.name}`);
                console.log(reviews);
            })
                .catch((err) => {
                console.error(`Error fetching reviews for ${product.name}:`, err);
            });
        });
        return Promise.all(reviewPromises);
    })
        .then(() => {
        return fetchSalesReport()
            .then((report) => {
            console.log("Sales Report:");
            console.log(report);
        })
            .catch((err) => {
            console.error("Error fetching sales report:", err);
        });
    })
        .catch((err) => {
        console.error("Error fetching product catalog:", err);
    })
        .finally(() => {
        console.log("All API calls have been attempted.");
    });
};
runApp();
//# sourceMappingURL=index.js.map