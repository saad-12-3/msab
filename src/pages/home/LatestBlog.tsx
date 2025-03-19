import LatestBlogCard from "@/components/allCard/LatestBlogCard";
import blogData from "@/utils/blogData";

const LatestBlog = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 md:w-10/12 mx-auto py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          সর্বশেষ ব্লগ পোস্ট
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 gap-6 place-content-center">
          {blogData?.map((item) => (
            <LatestBlogCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
