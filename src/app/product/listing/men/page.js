import { productByCategory } from "@/services/product"

const { default: CommonListing } = require("@/components/CommonListing")





export default async function MenAllProducts() {

    const getAllProducts = await productByCategory("men");

    return <CommonListing data={getAllProducts && getAllProducts.data} />
}