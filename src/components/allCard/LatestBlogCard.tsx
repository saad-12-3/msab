import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LatestBlogCardProps {
  data: {
    id: number;
    category: string;
    subTitle: string;
    description: string;
    image: string;
  };
}

const LatestBlogCard: React.FC<LatestBlogCardProps> = ({ data }) => {
  const { subTitle, category, description, image } = data || {};

  return (
    <Card className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0">
      <div className="relative w-full h-56">
        <Image 
          src={image.replace(".com.com", ".com")} // Fix invalid hostname issue
          alt="blog image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{subTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default LatestBlogCard;
