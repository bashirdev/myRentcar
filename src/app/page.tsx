import Banner from "@/components/ui/Banner";
import FeaturedSection from "@/components/ui/FeaturedSection";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Product from "@/components/ui/Product";



export default function Home() {
  return (
    <div className="w-full ">
        <Banner />
        <FeaturedSection />
        <Product />
    </div>
  )
}
